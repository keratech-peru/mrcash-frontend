import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import InputBoxes from "../../components/InputBoxes/InputBoxes";
import Timer from "../../components/Timer/Timer";
import TextLink from "../../components/TextLink/TextLink";

import Header from "../../layouts/Header/Header";

import otpValidationService from "../../services/otpValidationService";
import resendOtpValidationService from "../../services/resendOtpValidationService";

import "./Otp.css";

const Otp = () => {
  const navigate = useNavigate();

  const [key, setKey] = useState<number>(0);
  const [timerIsDone, setTimerIsDone] = useState<boolean>(false);

  const { state } = useLocation();
  const { appuser_id: userId, phone: userPhone } = state;

  const handleTimer = (isDone: boolean) => {
    setTimerIsDone(isDone);
  };

  const handleResendCode = async () => {
    const response = await resendOtpValidationService(userId);
    console.log("handleResendCode!", response);
    setKey((key: number) => key + 1);
    setTimerIsDone(false);
  };

  const handleFinalCode = async (code: string) => {
    const otpData = {
      appuser_id: userId,
      otp: code
    };
    console.log("handleFinalCode!", code, otpData);
    const response = await otpValidationService(otpData);
    console.log("response:", response);
    // navigate("/dashboard");
  };

  return (
    <>
      <Header />
      <main key={key} className="otp">
        <div className="container_otp">
          <h1 className="title">Por favor revisa tu celular</h1>
          <p className="description">
            Hemos enviado un código de acceso  que tiene  4 dígitos al número {userPhone}
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
