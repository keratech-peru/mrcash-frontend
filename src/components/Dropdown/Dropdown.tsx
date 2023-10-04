import { useState } from "react";

import "./Dropdown.css";

interface DropdownProps {
  options: any;
  onChange: (name: string) => void;
};

const Dropdrown = ({ options, onChange }: DropdownProps) => {
  const [value, setValue] = useState<string>("¿A qué banco pertenece tu cuenta?");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleChangeBank = (event: any) => {
    event.preventDefault();

    const { innerText } = event?.target;

    const currentBank = options?.find((option: any) => option?.name === innerText);

    setValue(innerText);
    setShowOptions(false);

    onChange(currentBank);
  };

  return (
    <div className={`dropdown ${showOptions ? "dropdown--open" : ""} `}>
      <input
        className="dropdown__input"
        type="text"
        value={value}
        readOnly
        onClick={handleShowOptions}
      />
      {
        showOptions && (
          <ul className="dropdown__options">
          {
            options?.map((option: any) => (
              <li
                key={option?.custom_name}
                id={option?.custom_name}
                className="dropdown__option"
                onClick={handleChangeBank}
              >
                {option?.name}
              </li>
            ))
          }
          </ul>
        )
      }
    </div>
  );

  // return (
  //   <select
  //     className="dropdown"
  //     value={value}
  //     onChange={onChange}
  //   >
  //     {
  //       options.map((option: any) => (
  //         <option
  //           key={option?.id}
  //           className="dropdown__option"
  //           value={option?.value}
  //         >
  //           {option?.label}
  //         </option>
  //       ))
  //     }
  //   </select>
  // );
};

export default Dropdrown;
