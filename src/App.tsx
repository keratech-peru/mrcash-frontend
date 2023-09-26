import { Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./views/Login/Login";
import Otp from "./views/Otp/Otp";
import Register from "./views/Register/Register";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="otp" element={ <Otp/> } />
          <Route path="register" element={ <Register/> } />
        </Routes>
      </div>
    </div>
  );
};

export default App;
