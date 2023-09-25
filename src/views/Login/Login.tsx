import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import "./Login.css";

import Input from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

import Header from "../../layouts/Header/Header";

import isValid from "../../utils/validations";

const Login = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [isLoginValid, setIsLoginValid] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const dniValidation = isValid(name, value);

    setLoginValue(value);
    setIsLoginValid(dniValidation);
  };

  const handleSubmitLogin = () => {
    console.log("handleSubmitLogin!");
  };

  useEffect(() => {
    const apiKey = "keyprueba_portal";
    const apiUrl = "https://5e65-38-25-30-150.ngrok-free.app/epe-programa/acerca-de";

    const requestOptions = {
      headers: {
        "Api-Lambda-Key": apiKey
      }
    };

    // Función para realizar la solicitud API
    const fetchData = async () => {
      try {
        const response = await axios.get<any>(apiUrl, requestOptions);

        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    // Llama a la función para realizar la solicitud API cuando el componente se monta
    fetchData();
  }, []);
  console.log("data:", data);
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
