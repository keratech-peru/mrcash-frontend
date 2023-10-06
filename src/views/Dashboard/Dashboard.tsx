import { useState, useEffect } from "react";

import DefaultBankLogo from "../../assets/images/bank-default.png";
import { ReactComponent as HamburguerMenuIcon } from "../../assets/icons/hamburguer-menu-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-icon.svg";
import Logo from "../../assets/images/logo.png";

import getUserAccountsService from "../../services/getUserAccountsService";

import formatDate from "../../utils/formatData";

import "./Dashboard.css";

const Dashboard = () => {
    const [usersData, setUsersData] = useState<any>(null);

    const getUserAccountsData = async () => {
        const response = await getUserAccountsService();

        const { data, status } = response;

        if (status === 200) {
            const { data: usersData } = data;

            const orderUsersData = usersData?.sort((a: any, b: any) => b.id - a.id);
            
            setUsersData(orderUsersData);
        };
    };

    useEffect(() => {
        getUserAccountsData();
    }, []);

    return (
        <>
            <header className="dashboard__header">
                <div className="dashboard__header_container">
                    <HamburguerMenuIcon />
                    <a href="/">
                        <img src={Logo} width={100} alt="Mr. Cash Logo" />
                    </a>
                    <UserIcon />
                </div>
            </header>
            <main className="dashboard__main">
                <div className="dashboard__main_container">
                    <h1 className="dashboard__title">Usuarios</h1>
                    <ul className="dashboard__userslist">
                        <li className="dashboard__user dashboard__user--heading">
                            <div className="dashboard__user__data">Creado</div>
                            <div className="dashboard__user__data">DNI</div>
                            <div className="dashboard__user__data">Cliente</div>
                            <div className="dashboard__user__data">Teléfono</div>
                            <div className="dashboard__user__data">Correo</div>
                            <div className="dashboard__user__data">Comisión</div>
                            <div className="dashboard__user__data">Número de cuenta</div>
                            <div className="dashboard__user__data">Estado</div>
                            <div className="dashboard__user__data">Acciones</div>
                        </li>
                        {
                            usersData?.map((userData: any) => (
                                <li key={userData?.doc_number} className="dashboard__user">
                                    <div className="dashboard__user__data">{formatDate(userData?.created_at)}</div>
                                    <div className="dashboard__user__data">{userData?.doc_number}</div>
                                    <div className="dashboard__user__data">
                                        <span>{userData?.name}</span>
                                        <span>{userData?.lastname}</span>
                                    </div>
                                    <div className="dashboard__user__data">{userData?.phone}</div>
                                    <div className="dashboard__user__data">{userData?.email}</div>
                                    <div className="dashboard__user__data">1%</div>
                                    <div className="dashboard__user__data">
                                        <img src={DefaultBankLogo} alt="Default Bank Logo" />
                                        <span>244493387509986050</span>
                                    </div>
                                    <div className="dashboard__user__data">{userData?.status}</div>
                                    <div className="dashboard__user__data">Acciones</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
