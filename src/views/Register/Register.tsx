import "./Register.css";

import Form from "../../components/Form/Form";

import Header from "../../layouts/Header/Header";

const Register = () => {
  return (
    <>
      <Header canReturn />
      <main className="register">
        <div className="container_register">
          <p
            className="description"
          >Para iniciar este proceso necesitamos conocer un poco de ti
          </p>
          <Form />
        </div>
      </main>
    </>
  );
};

export default Register;
