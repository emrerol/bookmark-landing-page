import "./medium-button.style.scss";

const MediumButton = ({ text, colorName, href }) => {
  return (
    <a href={`${href}`} className={`md-btn ${colorName}`}>
      {text}
    </a>
  );
};

export default MediumButton;
