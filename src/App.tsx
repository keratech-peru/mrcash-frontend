import "./App.css";

import Login from "./views/Login/Login";

import Header from "./layouts/Header/Header";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Login />
      </div>
    </div>
  );
};

export default App;
