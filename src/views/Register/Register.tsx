import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";

import InputField from "../../components/InputField/InputField";
import Form from "../../components/Form/Form";
import UploadFile from "../../components/UploadFile/UploadFile";
import Button from "../../components/Button/Button";
import Dropdrown from "../../components/Dropdown/Dropdown";
import Modal from "../../components/Modal/Modal";

import Header from "../../layouts/Header/Header";

import dniValidationService from "../../services/dniValidationService";

import { RegisterStepsType, DniFilesType, UploadFileType } from "../../utils/types";
import { InitialDniFiles } from "../../utils/initials";
import { banks } from "../../utils/constants";
import isValid from "../../utils/validations";

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<RegisterStepsType>("register");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dniFiles, setDniFiles] = useState<DniFilesType>(InitialDniFiles);
  const [hasDniFiles, setHasDniFiles] = useState<boolean>(false);
  const [bankName, setBankName] = useState<string>("");
  const [bankAccount, setBankAccount] = useState<string>("");
  const [hasBankAccount, setHasBankAccount] = useState<boolean>(false);
  console.log("hasBankAccount:", hasBankAccount);
  // Funciones del primer paso de Registro
  const handleSubmitForm = async (userData: any) => {
    const { dni: userDni } = userData;

    const response = await dniValidationService(userDni, 0);
    console.log("response:", response);
    const { data, status } = response;

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

  const handleSubmitUploadFiles = () => {
    setStep("account");
  };

  // Funciones del tercer paso de Registro
  const handleBankName = (name: string) => {
    if (!name) return;
    
    const bankName = banks?.find((bank: any) => bank?.value === name)?.label;
    
    setBankName(bankName ?? "");
  };

  const handleBankAccount = (event: any) => {
    event.preventDefault();

    const { value } = event?.target;
    
    const hasBankAccount = isValid("bankAccount", value);

    setBankAccount(value);
    setHasBankAccount(hasBankAccount);
  };

  const handleSubmitBankAccount = (event: any) => {
    event.preventDefault();

    if (bankAccount === "12345678") {
      navigate("/otp");
    };
  };

  // Función que controla cuando se cierra el modal mediante el botón que contiene
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!dniFiles) return;

    const hasDniFiles = Object.values(dniFiles).every((file: any) => Object.values(file).every((value: any) => value !== null && value !== undefined && value !== "" && value !== 0));

    setHasDniFiles(hasDniFiles);
  }, [dniFiles]);

  return (
    <>
      <Header canReturn />
      <main className="register">
        <div className="container_register">
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
                <p
                  className="description"
                >
                  Para iniciar este proceso necesitamos conocer un poco de ti
                </p>
                <Form onSubmitForm={handleSubmitForm}/>
              </>
            ) : step === "upload" ? (
              <>
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
                <p
                  className="description"
                >
                  Para finalizar con el registro, brindanos tu número de cuenta
                </p>
                <div className="register__account">
                  <Dropdrown
                    value={bankName}
                    options={banks}
                    onChange={handleBankName}
                  />
                  <InputField
                    name="bankAccount"
                    placeholder="Ej: 19139712973012"
                    value={bankAccount}
                    onChange={handleBankAccount}
                  />
                </div>
                <Button
                  text={"Listo"}
                  isActive={true}
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
