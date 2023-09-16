import { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import Header from "../../layouts/Header/Header";

import { isDniValid } from "../../utils/validations";

const Login = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [isSubmitLoginActive, setIsSubmitLoginActive] = useState<boolean>(false);

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const dniValidation = isDniValid(value);

    setLoginValue(value);
    setIsSubmitLoginActive(dniValidation);
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
            placeholder={"Ingrese su número de DNI"}
            maxLength={8}
            value={loginValue}
            onChange={handleLoginInput}
          />
          <Button
            text={"Ingresar"}
            isActive={isSubmitLoginActive}
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
