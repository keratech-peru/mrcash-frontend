import React from "react";

import "./Input.css";

interface InputProps {
  placeholder: string;
};

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
    />
  );
};

export default Input;
