import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as PersonViewIcon } from "../../assets/icons/person-view-icon.svg";
import { ReactComponent as PersonSuccessIcon } from "../../assets/icons/person-success-icon.svg";

import InputField from "../../components/InputField/InputField";
import Form from "../../components/Form/Form";
import UploadFile from "../../components/UploadFile/UploadFile";
import Button from "../../components/Button/Button";
import Dropdrown from "../../components/Dropdown/Dropdown";
import Modal from "../../components/Modal/Modal";

import Header from "../../layouts/Header/Header";

import dniValidationService from "../../services/dniValidationService";
import getUserBanksService from "../../services/getUserBanksService";
import createUserService from "../../services/createUserService";

import bankAccountFormat from "../../utils/bankAccountFormat";
import { RegisterStepsType, DniFilesType, UploadFileType } from "../../utils/types";
import { InitialDniFiles } from "../../utils/initials";
import isValid from "../../utils/validations";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<RegisterStepsType>("register");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [dniFiles, setDniFiles] = useState<DniFilesType>(InitialDniFiles);
  const [hasDniFiles, setHasDniFiles] = useState<boolean>(false);
  const [banks, setBanks] = useState<any>({});
  const [currentBank, setCurrentBank] = useState<any>(null);
  const [bankAccount, setBankAccount] = useState<string>("");
  const [hasBankAccount, setHasBankAccount] = useState<boolean>(false);

  // Funciones del primer paso de Registro
  const handleSubmitForm = async (formData: any) => {
    const { dni: userDni } = formData;

    const response = await dniValidationService(userDni, 0);

    const { data, status } = response;

    setFormData(formData);

    if (status === 200) {
      setStep("upload");
    };

    if (status === 400) {
      setModalMessage(data?.detail?.message);
      setShowModal(true);
    };
  };

  // Funciones del segundo paso de Registro
  const handleFrontDniFile = (file: UploadFileType) => {
    setDniFiles({...dniFiles, front: file});
  };

  const handleBackDniFile = (file: UploadFileType) => {
    setDniFiles({...dniFiles, back: file});
  };

  const handleSubmitUploadFiles = async () => {
    const response = await getUserBanksService();

    const { status, data } = response;

    if (status === 200) {
      const { banks } = data;
      
      setBanks(banks);
      setStep("account");
    };
  };

  // Funciones del tercer paso de Registro
  const handleBankName = (bank: any) => {
    if (!bank) return;

    setCurrentBank(bank);
  };

  const handleBankAccount = (event: any) => {
    event.preventDefault();

    const { value } = event?.target;
    
    const bankAccount = bankAccountFormat(value, currentBank?.format);
    const hasBankAccount = isValid("bankAccount", bankAccount, currentBank?.number_digits);

    setBankAccount(bankAccount);
    setHasBankAccount(hasBankAccount);
  };

  const handleSubmitBankAccount = async (event: any) => {
    event.preventDefault();

    const userData = {
      appusers: {
        name: formData?.name,
        lastname: formData?.lastName,
        email: formData?.email,
        phone: formData?.phone,
        doc_number: formData?.dni,
        doc_url_1: "",
        doc_url_2: "",
      },
      accounts: {
        bank_id: currentBank?.id,
        account_number: bankAccount?.split("-")?.join("")
      }
    };

    const response = await createUserService(userData);

    const { status, data } = response;

    if (status === 201) {
      navigate("/success");
      // navigate("/otp", { replace: true, state: data });
    };
    
    if (status === 400) {};
  };

  // Función de la pantalla de éxito

  // Función que controla cuando se cierra el modal mediante el botón que contiene
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    };
  }, [showModal]);

  useEffect(() => {
    if (!dniFiles) return;

    const hasDniFiles = Object.values(dniFiles).every((file: any) => Object.values(file).every((value: any) => value !== null && value !== undefined && value !== "" && value !== 0));

    setHasDniFiles(hasDniFiles);
  }, [dniFiles]);

  useEffect(() => {
    setBankAccount("");
    setHasBankAccount(false);
  }, [currentBank]);

  return (
    <>
      <Header canReturn />
      <main className="view">
        <div className="view_container">
          {
            showModal && (
              <Modal
                text={modalMessage}
                handleCloseModal={handleCloseModal}
              />
            )
          }
          {
            step === "register" ? (
              <>
                <PersonViewIcon />
                <p
                  className="description"
                >
                  Para iniciar este proceso necesitamos conocer un poco de ti
                </p>
                <Form onSubmitForm={handleSubmitForm}/>
              </>
            ) : step === "upload" ? (
              <>
                <PersonViewIcon />
                <p
                  className="description"
                >
                  Sigamos con el registro, sube  la imagen del anverso y reverso de tu DNI
                </p>
                <div className="register__uploadfiles">
                  <UploadFile
                    handleFile={handleFrontDniFile}
                    title="Anverso"
                  />
                  <UploadFile
                    handleFile={handleBackDniFile}
                    title="Reverso"
                  />
                </div>
                <Button
                  text={"Siguiente"}
                  isActive={hasDniFiles}
                  onClick={handleSubmitUploadFiles}
                />
              </>
            ) : step === "account" ? (
              <>
                <PersonViewIcon />
                <p
                  className="description"
                >
                  Para finalizar con el registro, brindanos tu número de cuenta
                </p>
                <div className="register__account">
                  <Dropdrown
                    options={banks}
                    onChange={handleBankName}
                  />
                  <InputField
                    name="bankAccount"
                    placeholder={`Ej: ${currentBank?.format ?? "123-1231445-1231"}`}
                    maxLength={currentBank?.format?.length}
                    value={bankAccount}
                    isDisabled={!currentBank}
                    isValid={isValid("bankAccount", bankAccount, currentBank?.number_digits)}
                    icon={currentBank && <img height={16} src={currentBank?.url_image} alt={`${currentBank?.custom_name} Logo Bank`} />}
                    onChange={handleBankAccount}
                  />
                </div>
                <Button
                  text={"Listo"}
                  isActive={hasBankAccount}
                  onClick={handleSubmitBankAccount}
                />
              </>
            ) : <></>
          }
        </div>
      </main>
    </>
  );
};

export default Register;
