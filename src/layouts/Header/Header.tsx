import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import { ReactComponent as BackButton} from "../../assets/icons/back-button-icon.svg";

import "./Header.css";

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
        <img className="header__logo" src={Logo} alt="Mr. Cash Logo" />
      </div>
    </header>
  );
};

export default Header;
