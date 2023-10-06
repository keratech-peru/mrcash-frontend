import { Routes, Route } from "react-router-dom";

import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Otp from "./views/Otp/Otp";
import Dashboard from "./views/Dashboard/Dashboard";
import Success from "./views/Success/Success";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="register" element={ <Register/> } />
          <Route path="otp" element={ <Otp/> } />
          <Route path="dashboard" element={ <Dashboard/> } />
          <Route path="success" element={ <Success/> } />
        </Routes>
      </div>
    </div>
  );
};

export default App;
