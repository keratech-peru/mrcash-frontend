import { Link } from "react-router-dom";

import "./Login.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import Header from "../../layouts/Header/Header";

const Login = () => {
  return (
    <>
      <Header />
      <main className="login">
        <div className="container_login">
          <h1 className="title">¡Hola!</h1>
          <p className="description">Bienvenido a Mr. Cash</p>
          <Input placeholder={"Ingrese su número de DNI"} />
          <Button text={"Ingresar"} />
          <Link to="register">Quiero registrarme</Link>
        </div>
      </main>
    </>
  );
};

export default Login;
