import "./medium-button.style.scss";

const MediumButton = ({ text, colorName }) => {
  return <button className={`md-btn ${colorName}`}>{text}</button>;
};

export default MediumButton;
