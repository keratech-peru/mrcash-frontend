import { Link } from "react-router-dom";

import "./Header.css";

import Logo from "../../assets/icons/Logo";
import BackButton from "../../assets/icons/BackButton";

interface HeaderProps {
  canReturn?: boolean;
};

const Header = ({ canReturn = false }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header__link">
          {
            canReturn && (
              <Link to="/">
                <BackButton />
                Regresar
              </Link>
            )
          }
        </div>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
