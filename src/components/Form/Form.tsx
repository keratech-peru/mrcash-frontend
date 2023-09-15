import "./Form.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form className="form">
      <div className="container_form">
        <Input placeholder="Ingresa tus nombres" />
        <Input placeholder="Ingresa tus apellidos" />
        <div className="double_input">
          <Input placeholder="Ingresa tu DNI" />
          <Input placeholder="Ingresa fecha de nacimiento" />
        </div>
        <div className="double_input">
          <Input placeholder="Ingresa tu correo" />
          <Input placeholder="Ingresa tu número de celular" />
        </div>
      </div>
      <Button text="Siguiente" />
    </form>
  );
};

export default Form;
