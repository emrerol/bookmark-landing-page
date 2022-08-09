import "./medium-button.style.scss";

const MediumButton = ({ text, colorName }) => {
  return <a className={`md-btn ${colorName}`}>{text}</a>;
};

export default MediumButton;
