import { useState } from "react";

import "./InputBox.css";

interface InputBoxProps {
  name: string;
  isActive?: boolean;
  onChange: any;
};

const InputBox = ({ name, isActive = true, onChange }: InputBoxProps) => {
  const [value, setValue] = useState<string>("");

  const className = `inputbox ${isActive ? "": "inputbox--inactive"}`; 

  const handleInputBox = (event: any) => {
    event.preventDefault();

    const { name, value } = event?.target;

    const isNum = /^\d+$/.test(value);
    
    if (isNum) {
      setValue(value);
      onChange(name);
    };
  };

  return (
    <input
      id={name}
      className={className}
      type="text"
      name={name}
      maxLength={1}
      value={value}
      onChange={handleInputBox}
    />
  )
};

export default InputBox;
