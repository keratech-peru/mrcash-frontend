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
  const [timerStatus, setTimerStatus] = useState<string>("active");
  const [isActiveInputBoxes, setIsActiveInputBoxes] = useState<boolean>(true);

  const { state } = useLocation();

  const { data, isLogin } = state;
  const { appuser_id: userId, phone: userPhone } = data;

  const handleTimer = (isDone: boolean) => {
    setTimerStatus("done");
    setIsActiveInputBoxes(!isDone);
  };

  const handleResendCode = async () => {
    resendOtpValidationService(userId);

    setKey((key: number) => key + 1);
    setTimerStatus("active");
    setIsActiveInputBoxes(true);
  };

  const handleFinalCode = async (code: string) => {
    const otpData = {
      appuser_id: userId,
      otp: code
    };

    const response = await otpValidationService(otpData);

    const { status } = response;

    if (status === 200) {
      setTimerStatus("success");

      if (isLogin) {
        navigate("/dashboard");
      } else {
        navigate("/success");
      };
    };
    
    if (status === 400) {
      setTimerStatus("error");
      setIsActiveInputBoxes(false);
    };
  };

  return (
    <>
      <Header />
      <main key={key} className="view">
        <div className="view_container">
          <h1 className="title">Por favor revisa tu celular</h1>
          <p className="description">
            Hemos enviado un código de acceso  que tiene  4 dígitos al número {userPhone}
          </p>
          <InputBoxes
            size={4}
            isActive={isActiveInputBoxes}
            handleCode={handleFinalCode}
          />
          <Timer
            time={30}
            status={timerStatus}
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
