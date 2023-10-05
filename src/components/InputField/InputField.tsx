import React, { useState, useEffect } from "react";

import { errors } from "../../utils/texts";
import { FormFieldsInterface } from "../../utils/types";

import "./InputField.css";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  maxLength?: number;
  value?: string;
  isDisabled?: boolean;
  isValid?: boolean;
  icon?: any;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputField = ({
  name,
  type = "text",
  placeholder,
  maxLength = 100,
  value = "",
  isDisabled = false,
  isValid,
  icon,
  onChange
}: InputFieldProps) => {
  const [hasError, setHasError] = useState<boolean>(false);

  const inputFieldClassName = `inputfield ${hasError ? "inputfield--error" : ""} ${isDisabled ? "inputfield--disabled": ""}`;
  const errorMessage = errors[name as keyof FormFieldsInterface];

  useEffect(() => {
    setHasError(!isValid);
  }, [value, isValid]);

  // Se quita el mensaje de error por defecto en el 1er renderizado.
  useEffect(() => {
    setHasError(false);
  }, []);

  return (
    <div className={inputFieldClassName}>
      <input
        className="inputfield__input"
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <div className="inputfield__icon">
        {icon}
      </div>
      <span className="inputfield__error">{errorMessage}</span>
    </div>
  );
};

export default InputField;
