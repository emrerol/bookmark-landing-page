import { useContext } from "react";
import SmallButton from "../../components/small-button/small-button.component";
import Logo from "../../images/logo-bookmark.svg";
import Hamburger from "../../images/icon-hamburger.svg";
import "./header.style.scss";
import HamburgerMenu from "../../components/hamburger-menu/hamburger-menu.component";
import { ButtonContext } from "../../contexts/button.context";
import { ToggleContext } from "../../contexts/toggle.context";
import { useEffect } from "react";

const Header = () => {
  const { buttonType } = useContext(ButtonContext);
  const { smallRedButton } = buttonType;
  const { isToggle, setIsToggle } = useContext(ToggleContext);

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  //hamburger menu acikken scroll'a izin vermiyor
  useEffect(()=>{
    if(isToggle){
        window.onscroll = function () { window.scrollTo(0, 0); };
      }
    else{
        window.onscroll = function (){};
    }
  },[isToggle]);

  

  return (
    <header>
      <nav className="nav">
        <div className="header-logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="header-routes">
          <a href="/#" className="header-routes__element">
            Features
          </a>
          <a href="/#" className="header-routes__element">
            Pricing
          </a>
          <a href="/#" className="header-routes__element">
            Contact
          </a>
          <SmallButton href={"#"} text={"LOGIN"} colorName={smallRedButton} />
        </div>
        <div className="hamburger-wrapper" onClick={toggleHandler}>
          <img src={Hamburger} alt="menu"/>
          {isToggle && <HamburgerMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
