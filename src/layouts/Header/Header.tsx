import "./Header.css";

import Logo from "../../assets/icons/Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <a className="header__logo" href="/">
          <Logo />
        </a>
      </div>
    </header>
  );
};

export default Header;
