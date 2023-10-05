import Button from "../Button/Button";

import { ReactComponent as PersonModalIcon } from "../../assets/icons/person-modal-icon.svg";

import "./Modal.css";

interface IModalProps {
  text: string
  handleCloseModal: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Modal = ({ text, handleCloseModal }: IModalProps) => {
  return (
    <div className="wrapper_modal">
      <div className="modal">
        <div className="modal_container">
            <PersonModalIcon />
            <p className="modal__text">{text}</p>
            <Button
              text="Volver"
              isActive={true}
              onClick={handleCloseModal}
            />
        </div>
      </div>
    </div>
  );
};

export default Modal;
