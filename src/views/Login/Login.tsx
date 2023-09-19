import { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import Header from "../../layouts/Header/Header";

import isValid from "../../utils/validations";

const Login = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [isLoginValid, setIsLoginValid] = useState<boolean>(false);

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const dniValidation = isValid(name, value);

    setLoginValue(value);
    setIsLoginValid(dniValidation);
  };

  const handleSubmitLogin = () => {
    console.log("handleSubmitLogin!");
  };

  return (
    <>
      <Header />
      <main className="login">
        <div className="container_login">
          <h1 className="title">¡Hola!</h1>
          <p className="description">Bienvenido a Mr. Cash</p>
          <Input
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
    </>
  );
};

export default Login;
