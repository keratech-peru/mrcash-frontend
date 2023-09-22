import { useState } from "react";

import "./Form.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { InitialFormFields, InitialFormFieldsValidations } from "../../utils/initials";
import { placeholders } from "../../utils/texts";
import { FormFieldsInterface, FormFieldsValidationsInterface } from "../../utils/types";
import isValid from "../../utils/validations";

interface FormProps {
  onSubmitForm: any;
};

const Form = ({ onSubmitForm }: FormProps) => {
  const [data, setData] = useState<FormFieldsInterface>(InitialFormFields);
  const [validations, setValidations] = useState<FormFieldsValidationsInterface>(InitialFormFieldsValidations);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const currentValidations = {...validations, [name]: isValid(name, value)};
    const isFormValid = Object.values(currentValidations).every(value => value === true);

    setData({...data, [name]: value});
    setValidations(currentValidations);
    setIsFormValid(isFormValid);
  };

  const handleSubmitForm = (event: any) => {
    event.preventDefault();

    onSubmitForm(data);
  };

  return (
    <form className="form">
      <div className="container_form">
        <Input
          name="name"
          placeholder={placeholders["name"]}
          value={data["name"]}
          isValid={validations["name"]}
          onChange={handleFormInput}
        />
        <Input
          name="lastName"
          placeholder={placeholders["lastName"]}
          value={data["lastName"]}
          isValid={validations["lastName"]}
          onChange={handleFormInput}
        />
        <div className="double_input">
          <Input
            name="dni"
            placeholder={placeholders["dni"]}
            maxLength={8}
            value={data["dni"]}
            isValid={validations["dni"]}
            onChange={handleFormInput}
          />
          <Input
            name="birthday"
            type="date"
            placeholder={placeholders["birthday"]}
            value={data["birthday"]}
            isValid={validations["birthday"]}
            onChange={handleFormInput}
          />
        </div>
        <div className="double_input">
          <Input
            name="email"
            placeholder={placeholders["email"]}
            value={data["email"]}
            isValid={validations["email"]}
            onChange={handleFormInput}
          />
          <Input
            name="phone"
            placeholder={placeholders["phone"]}
            value={data["phone"]}
            isValid={validations["phone"]}
            onChange={handleFormInput}
          />
        </div>
      </div>
      <Button
        text="Siguiente"
        type="submit"
        isActive={isFormValid}
        onClick={(event) => handleSubmitForm(event)}
      />
    </form>
  );
};

export default Form;
