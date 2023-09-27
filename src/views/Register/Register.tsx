import { useEffect, useState } from "react";

import "./Register.css";

import InputField from "../../components/InputField/InputField";
import Form from "../../components/Form/Form";
import UploadFile from "../../components/UploadFile/UploadFile";
import Button from "../../components/Button/Button";
import Dropdrown from "../../components/Dropdown/Dropdown";

import Header from "../../layouts/Header/Header";

import { RegisterStepsType, DniFilesType, UploadFileType } from "../../utils/types";
import { InitialDniFiles } from "../../utils/initials";
import { banks } from "../../utils/constants";
import isValid from "../../utils/validations";
import Person from "../../assets/icons/Person";

const Register = () => {
  const [step, setStep] = useState<RegisterStepsType>("upload");
  const [dniFiles, setDniFiles] = useState<DniFilesType>(InitialDniFiles);
  const [hasDniFiles, setHasDniFiles] = useState<boolean>(false);
  const [bankName, setBankName] = useState<string>("");
  const [bankAccount, setBankAccount] = useState<string>("");
  const [hasBankAccount, setHasBankAccount] = useState<boolean>(false);

  // Funciones del primer paso de Registro
  const handleSubmitForm = (data: any) => {
    console.log("handleSubmitForm!", data);
    setStep("upload");
  };

  // Funciones del segundo paso de Registro
  const handleFrontDniFile = (file: UploadFileType) => {
    console.log("handleFrontDniFile!", file);
    setDniFiles({...dniFiles, front: file});
  };

  const handleBackDniFile = (file: UploadFileType) => {
    console.log("handleBackDniFile!", file);
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
          <div className="register__logoPerson">
           <Person />
          </div>
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
                  onClick={() => {}}
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
