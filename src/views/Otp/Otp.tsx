import "./Otp.css";

import InputBoxes from "../../components/InputBoxes/InputBoxes";
import Timer from "../../components/Timer/Timer";

import Header from "../../layouts/Header/Header";

const Otp = () => {
  return (
    <>
      <Header />
      <main className="otp">
        <div className="container_otp">
          <h1 className="title">Por favor revisa tu celular</h1>
          <p className="description">
            Hemos enviado un código de acceso  que tiene  4 dígitos al número *** *** *66
          </p>
          <InputBoxes size={4}/>
          <Timer time={30}/>
        </div>
      </main>
    </>
  );
};

export default Otp;
