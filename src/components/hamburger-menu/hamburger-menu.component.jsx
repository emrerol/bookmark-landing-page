import "./hamburger-menu.style.scss";

import Bookmark from "../../images/logo-bookmark-white.svg"
import Close from "../../images/close-icon.svg"
import fb from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"

const HamburgerMenu = () => {
  const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', documentHeight)
  documentHeight()

  return <div className="hamburger-menu">
    <div className="items">
      <div className="header">
        <img src={Bookmark} alt="bookmark" />
        <img src={Close} alt="close"/>
      </div>
      <hr className="solid"></hr>
      <a href="/#">FEATURES</a>
      <hr className="solid"></hr>
      <a href="/#">PRICING</a>
      <hr className="solid"></hr>
      <a href="/#">CONTACT</a>
      <hr className="solid"></hr>
      <button className="loginbtn">LOGIN</button>
      <div className="logos">
        <img src={fb} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  </div>;
};

export default HamburgerMenu;
