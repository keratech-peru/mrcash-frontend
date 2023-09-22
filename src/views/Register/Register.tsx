import { useEffect, useState } from "react";

import "./Register.css";

import Form from "../../components/Form/Form";
import UploadFile from "../../components/UploadFile/UploadFile";
import Button from "../../components/Button/Button";

import Header from "../../layouts/Header/Header";

import { DniFilesType, UploadFileType } from "../../utils/types";
import { InitialDniFiles } from "../../utils/initials";

const Register = () => {
  const [step, setStep] = useState<any>("account");
  const [dniFiles, setDniFiles] = useState<DniFilesType>(InitialDniFiles);
  const [hasDniFiles, setHasDniFiles] = useState<boolean>(false);

  const handleSubmitForm = (data: any) => {
    console.log("handleSubmitForm!", data);
    setStep("upload");
  };

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

  useEffect(() => {
    if (!dniFiles) return;

    const hasDniFiles = Object.values(dniFiles).every(value => value !== null && value !== undefined);

    setHasDniFiles(hasDniFiles);
  }, [dniFiles]);

  return (
    <>
      <Header canReturn />
      <main className="register">
        <div className="container_register">
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
                {/* <div className="register__account">
                  <Input />
                  <Input /
                </div> */}
              </>
            ) : <></>
          }
        </div>
      </main>
    </>
  );
};

export default Register;
