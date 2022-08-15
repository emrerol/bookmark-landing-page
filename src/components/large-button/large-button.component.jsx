import "./large-button.styles.scss";
import "./large-button.styles.scss";

const LargeButton = ({ text, colorName, href }) => {
  return (
    <a href={`${href}`} className={`lg-btn ${colorName}`}>
      {text}
    </a>
  );
};

export default LargeButton;
