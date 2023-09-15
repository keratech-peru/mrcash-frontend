import { Link } from "react-router-dom";

import "./Header.css";

import Logo from "../../assets/icons/Logo";

interface HeaderProps {
  canReturn?: boolean;
};

const Header = ({ canReturn = false }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header_container">
        <div>
          { canReturn && <Link to="/">Regresar</Link> }
        </div>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
