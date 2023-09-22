import React, { useState, useEffect } from "react";

import "./Input.css";

import { errors } from "../../utils/texts";
import { FormFieldsInterface } from "../../utils/types";

interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  maxLength?: number;
  value?: string;
  isValid?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = (
  {
    name,
    type = "text",
    placeholder,
    maxLength = 100,
    value = "",
    isValid,
    onChange
  }: InputProps) => {
    const [hasError, setHasError] = useState<boolean>(false);

    const inputClassName = `input ${hasError ? "input--error" : ""}`;
    const errorMessage = errors[name as keyof FormFieldsInterface];

    useEffect(() => {
      setHasError(!isValid);
    }, [value, isValid]);

    // Se quita el mensaje de error por defecto en el 1er renderizado.
    useEffect(() => {
      setHasError(false);
    }, []);

    return (
      <div className={inputClassName}>
        <input
          className="input__field"
          type={type}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
        <span className="input__error">{errorMessage}</span>
      </div>
    );
};

export default Input;
