import { useState } from "react";

import "./Form.css";

import InputField from "../InputField/InputField";
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

  const handleFormInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <InputField
          name="name"
          placeholder={placeholders["name"]}
          value={data["name"]}
          isValid={validations["name"]}
          onChange={handleFormInputField}
        />
        <InputField
          name="lastName"
          placeholder={placeholders["lastName"]}
          value={data["lastName"]}
          isValid={validations["lastName"]}
          onChange={handleFormInputField}
        />
        <div className="double_input">
          <InputField
            name="dni"
            placeholder={placeholders["dni"]}
            maxLength={8}
            value={data["dni"]}
            isValid={validations["dni"]}
            onChange={handleFormInputField}
          />
          <InputField
            name="birthday"
            type="date"
            placeholder={placeholders["birthday"]}
            value={data["birthday"]}
            isValid={validations["birthday"]}
            onChange={handleFormInputField}
          />
        </div>
        <div className="double_input">
          <InputField
            name="email"
            placeholder={placeholders["email"]}
            value={data["email"]}
            isValid={validations["email"]}
            onChange={handleFormInputField}
          />
          <InputField
            name="phone"
            placeholder={placeholders["phone"]}
            value={data["phone"]}
            isValid={validations["phone"]}
            onChange={handleFormInputField}
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
