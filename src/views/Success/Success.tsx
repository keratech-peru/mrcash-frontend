import { useNavigate } from "react-router-dom";

import { ReactComponent as PersonSuccessIcon } from "../../assets/icons/person-success-icon.svg";

import Button from "../../components/Button/Button";

import Header from "../../layouts/Header/Header";

const Success = () => {
    const navigate = useNavigate();
    
    const handleSuccessButton = () => navigate("/");

    return (
        <>
            <Header />
            <main className="view">
                <div className="view_container">
                    <PersonSuccessIcon />
                    <p
                        className="description"
                    >
                        Estamos validando tus datos y en 8 horas hábiles te enviaremos un mensaje de confirmación con el resultado: <span>APROBADO o RECHAZADO</span>.
                    </p>
                    <Button text="Volver" isActive={true} onClick={handleSuccessButton} />
                </div>
            </main>
        </>
    );
};

export default Success;
