import Header from "../../layouts/Header/Header";

import "./Dashboard.css";

const Dashboard = () => {
    return (
        <>
            <Header />
            <main className="dashboard">
                <div className="container_dashboard">
                    <h1 className="title">Dashboard</h1>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
