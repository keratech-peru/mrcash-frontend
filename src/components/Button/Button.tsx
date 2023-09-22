import React from "react";

import "./Button.css";

import { ButtonType } from "../../utils/types";

interface ButtonProps {
  text: string;
  type?: ButtonType;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ text, type = "button", isActive, onClick }: ButtonProps) => {
  const buttonClassName = `button ${isActive ? "button--active": ""}`;

  return (
    <button
      className={buttonClassName}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
