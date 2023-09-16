import "./Form.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

const Form = () => {
  const handleFormInput = () => {
    console.log("handleFormInput!");
  };

  const handleSubmitForm = () => {
    console.log("handleSubmitForm!");
  };

  return (
    <form className="form">
      <div className="container_form">
        <Input
          placeholder="Ingresa tus nombres"
          onChange={handleFormInput}
        />
        <Input
          placeholder="Ingresa tus apellidos"
          onChange={handleFormInput}
        />
        <div className="double_input">
          <Input
            placeholder="Ingresa tu DNI"
            onChange={handleFormInput}
          />
          <Input
            placeholder="Ingresa fecha de nacimiento"
            onChange={handleFormInput}
          />
        </div>
        <div className="double_input">
          <Input
            placeholder="Ingresa tu correo"
            onChange={handleFormInput}
          />
          <Input
            placeholder="Ingresa tu número de celular"
            onChange={handleFormInput}
          />
        </div>
      </div>
      <Button
        text="Siguiente"
        isActive={false}
        onClick={handleSubmitForm}
      />
    </form>
  );
};

export default Form;
