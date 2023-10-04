import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import TextLink from "../../components/TextLink/TextLink";

import Header from "../../layouts/Header/Header";

import dniValidationService from "../../services/dniValidationService";

import isValid from "../../utils/validations";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState<string>("");
  const [isLoginValid, setIsLoginValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  console.log("errorMessage:", errorMessage);
  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const dniValidation = isValid(name, value);

    setLoginValue(value);
    setIsLoginValid(dniValidation);
  };

  const handleSubmitLogin = async () => {
    const response = await dniValidationService(loginValue, 1);

    const { status, data } = response;

    if (status === 200) {
      navigate("/otp", { replace: true, state: data });
    };

    if (status === 400) {
      setIsLoginValid(false);
      setErrorMessage(data?.detail?.message);
    };
  };

  // Renderizado de la sección de Login
  return (
    <>
      <Header />
      <main className="view">
        <div className="view_container">
          <h1 className="title">¡Hola!</h1>
          <p className="description">Bienvenido a Mr. Cash</p>
          <InputField
            name="dni"
            placeholder={"Ingrese su número de DNI"}
            maxLength={8}
            value={loginValue}
            isValid={isLoginValid}
            onChange={handleLoginInput}
          />
          <Button
            text={"Ingresar"}
            isActive={isLoginValid}
            onClick={handleSubmitLogin}
          />
          <TextLink
            text="Quiero registrarme"
            url="register"
          />
        </div>
      </main>
    </>
  );
};

export default Login;
