import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputBoxes from "../../components/InputBoxes/InputBoxes";
import Timer from "../../components/Timer/Timer";
import TextLink from "../../components/TextLink/TextLink";

import Header from "../../layouts/Header/Header";

import "./Otp.css";

const Otp = () => {
  const navigate = useNavigate();

  const [key, setKey] = useState<number>(0);
  const [timerIsDone, setTimerIsDone] = useState<boolean>(false);
  
  const handleTimer = (isDone: boolean) => {
    setTimerIsDone(isDone);
  };

  const handleResendCode = () => {
    setKey((key: number) => key + 1);
    setTimerIsDone(false);
  };

  const handleFinalCode = (code: string) => {
    console.log("handleFinalCode!", code);
    navigate("/dashboard");
  };

  return (
    <>
      <Header />
      <main key={key} className="otp">
        <div className="container_otp">
          <h1 className="title">Por favor revisa tu celular</h1>
          <p className="description">
            Hemos enviado un código de acceso  que tiene  4 dígitos al número *** *** *66
          </p>
          <InputBoxes
            size={4}
            isActive={!timerIsDone}
            handleCode={handleFinalCode}
          />
          <Timer
            time={10}
            handleTimer={handleTimer}
          />
          <TextLink
            text="Volver a enviar el código"
            onclick={handleResendCode}
          />
        </div>
      </main>
    </>
  );
};

export default Otp;
