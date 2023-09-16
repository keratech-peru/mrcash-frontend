import React, { useState, useEffect } from "react";

import "./Input.css";

import { isDniValid } from "../../utils/validations";

interface InputProps {
  placeholder: string;
  maxLength?: number;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = (
  {
    placeholder,
    maxLength = 100,
    value = "",
    onChange
  }: InputProps) => {
    const [hasError, setHasError] = useState<boolean>(false);
    const inputClassName = `input ${hasError ? "input--error" : ""}`;

    useEffect(() => {
      setHasError(!isDniValid(value));
    }, [value]);

    useEffect(() => {
      setHasError(false);
    }, []);

    return (
      <div className={inputClassName}>
        <input
          className="input__field"
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
        <span className="input__error">¡El DNI ingresado es incorrecto!</span>
      </div>
    );
};

export default Input;
