import Logo from "../../assets/images/logo.png";
import { ReactComponent as BackButton} from "../../assets/icons/back-button-icon.svg";

import "./Header.css";

interface HeaderProps {
  canReturn?: boolean;
  handleClickBackButton?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const Header = ({ canReturn = false, handleClickBackButton }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header_container">
        {
          canReturn && (
            <div className="header__link" onClick={handleClickBackButton}>
              <BackButton />
              Regresar
            </div>
          )
        }
        <a href="https://mrcash.com.pe/" className="header__logo">
          <img src={Logo} alt="Mr. Cash Logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
