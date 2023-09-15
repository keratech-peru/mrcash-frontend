import React from "react";

import "./Login.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";

const Login = () => {
  return (
    <div className="login">
      <div className="container_login">
        <h1 className="title">¡Hola!</h1>
        <p className="description">Bienvenido a Mr. Cash</p>
        <Input placeholder={"Ingrese su número de DNI"} />
        <Button text={"Ingresar"} />
        <Link text={"Quiero registrarme"} />
      </div>
    </div>
  );
};

export default Login;
