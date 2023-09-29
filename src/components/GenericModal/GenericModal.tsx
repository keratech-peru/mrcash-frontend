import React from 'react';

import './GenericModal.css';
import PersonModal from '../../assets/icons/PersonModal';
import Button from '../Button/Button';

function GenericModal() {
  return (
    <div className="overlay_modal">
      <div className="container_modal">
        <div className="container_data_modal">
          <PersonModal />
          <p className="description">El DNI ingresado ya pertenece a una cuenta existente.</p>
          <Button
            text={"Volver al Registro"}
            isActive={true}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
};

export default GenericModal;