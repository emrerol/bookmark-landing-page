import { useEffect, useState } from "react";
import SmallButton from "../../components/small-button/small-button.component";
import Logo from "../../images/logo-bookmark.svg";
import Hamburger from "../../images/icon-hamburger.svg";
import "./header.style.scss";

const Header = () => {
  const BUTTON_TYPES = {
    smallRedButton: "sml-red-btn",
    smallBlueButton: "sml-blue-btn",
    mediumBlueButton: "md-blue-btn",
    mediumGreyButton: "md-grey-btn",
  };

  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header>
      <nav className="nav">
        <div className="header-logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="header-routes">
          <a href="#" className="header-routes__element">
            Features
          </a>
          <a href="#" className="header-routes__element">
            Pricing
          </a>
          <a href="#" className="header-routes__element">
            Contact
          </a>
          <SmallButton text={"Login"} colorName={BUTTON_TYPES.smallRedButton} />
        </div>
        <div className="hamburger-wrapper" onClick={toggleHandler}>
          <img src={Hamburger} />
        </div>
        {isToggle && (
          <div className="list-routes">
            <a href="#" className="list-routes__element">
              Features
            </a>
            <a href="#" className="list-routes__element">
              Pricing
            </a>
            <a href="#" className="list-routes__element">
              Contact
            </a>
            <SmallButton
              text={"Login"}
              colorName={BUTTON_TYPES.smallRedButton}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
