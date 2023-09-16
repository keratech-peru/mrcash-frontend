import React from "react";

import "./Button.css";

interface ButtonProps {
  text: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ text, isActive, onClick }: ButtonProps) => {
  const buttonClassName = `button ${isActive ? "button--active": ""}`;

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
