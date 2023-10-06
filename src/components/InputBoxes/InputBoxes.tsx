import { useState, useRef } from "react";

import "./InputBoxes.css";

import InputBox from "../InputBox/InputBox";

interface InputBoxesProps {
  size: number;
  isActive: boolean;
  handleCode: any;
};

const InputBoxes = ({ size = 1, isActive = true, handleCode }: InputBoxesProps) => {
  const inputBoxesRef: any = useRef(null);

  const [code, setCode] = useState<string>("");

  const handleCurrentInputBox = (id: string, value: string) => {
    const currentId = Number(id?.split("-")[1]);
    const inputBoxes = inputBoxesRef?.current?.childNodes;
    const nextInputBox = inputBoxes[currentId + 1];
    const currentCode = code + value;

    if (currentId < inputBoxes.length - 1) {
      setCode(code + value);
      nextInputBox.focus();
    } else {
      inputBoxes[currentId].blur();
      handleCode(currentCode);
    };
  };

  const renderList = () => {
    const listItems = [];

    for (let i = 0; i < size; i++) {
      const itemKey = `inputbox-${i}`;

      listItems.push(
        <InputBox
          key={itemKey}
          name={itemKey}
          isActive={isActive}
          onChange={handleCurrentInputBox}
        />
      );
    };

    return listItems;
  };

  return (
    <div
      className="inputboxes"
      ref={inputBoxesRef}
    >
      {renderList()}
    </div>
  );
};

export default InputBoxes;