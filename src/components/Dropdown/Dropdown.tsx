import { useState } from "react";

import "./Dropdown.css";

interface DropdownProps {
  value: string;
  options: any;
  onChange: (name: string) => void;
};

const Dropdrown = ({ value, options, onChange }: DropdownProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleChangeBank = (event: any) => {
    event.preventDefault();
    console.log(event.target);
    const { id } = event?.target;

    onChange(id);
  };

  return (
    <div className="dropdown">
      <input
        className="dropdown__input"
        type="text"
        value={value}
        onClick={handleShowOptions}
      />
      {
        showOptions && (
          <ul className="dropdown__options">
          {
            options.map((option: any) => (
              <li
                id={option?.value}
                key={option?.value}
                className="dropdown__option"
                onClick={handleChangeBank}
              >
                {option?.label}
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
