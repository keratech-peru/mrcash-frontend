import { useState, useRef } from "react";

import "./InputBoxes.css";

import InputBox from "../InputBox/InputBox";

interface InputBoxesProps {
  size: number;
};

const InputBoxes = ({ size = 1 }: InputBoxesProps) => {
  const inputBoxesRef: any = useRef(null);

  const renderList = () => {
    const listItems = [];

    const handleCurrentInputBox = (id: string) => {
      const currentId = Number(id?.split("-")[1]);
      const inputBoxes = inputBoxesRef?.current?.childNodes;
      const nextInputBox = inputBoxes[currentId + 1];

      if (currentId < inputBoxes.length - 1) {
        nextInputBox.focus();
      };
    };

    for (let i = 0; i < size; i++) {
      const itemKey = `inputbox-${i}`;

      listItems.push(
        <InputBox
          key={itemKey}
          name={itemKey}
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