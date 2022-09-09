import "./footer.style.scss";
import FB from "../../images/icon-facebook.svg";
import TW from "../../images/icon-twitter.svg";
import Logo from "../../images/logo-bookmark-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__routes">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <a href="#">features</a>
        <a href="#">pricing</a>
        <a href="#">contact</a>
      </div>
      <div className="footer__externals">
        <a href="#">
          <img src={FB} alt="facebook logo" />
        </a>
        <a href="#">
          <img src={TW} alt="twitter logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
