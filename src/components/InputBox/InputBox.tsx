import { useState } from "react";

import "./InputBox.css";

interface InputBoxProps {
  name: string;
  onChange: any;
};

const InputBox = ({ name, onChange }: InputBoxProps) => {
  const [value, setValue] = useState<string>("");

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
      className="inputbox"
      type="text"
      name={name}
      maxLength={1}
      value={value}
      onChange={handleInputBox}
    />
  )
};

export default InputBox;
