import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

import Header from "../../layouts/Header/Header";

import dniValidationService from "../../services/dniValidationService";

import isValid from "../../utils/validations";
import GenericModal from "../../components/GenericModal/GenericModal";

const Login = () => {
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState<string>("");
  const [isLoginValid, setIsLoginValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const dniValidation = isValid(name, value);

    setLoginValue(value);
    setIsLoginValid(dniValidation);
  };

  const handleSubmitLogin = async () => {
    const response = await dniValidationService(loginValue);

    const { status, data } = response;

    if (status === 200) {
      navigate("/otp");
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
      <main className="login">
        <div className="container_login">
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
          <div className="login__link">
            <Link
              to="register"
            >
              Quiero registrarme
            </Link>
          </div>
        </div>
      </main>
      <GenericModal />
    </>
  );
};

export default Login;
