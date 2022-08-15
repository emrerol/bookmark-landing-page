import "./small-button.styles.scss";

const SmallButton = ({ text, colorName, href }) => {
  return (
    <a href={`${href}`} className={`sml-btn ${colorName}`}>
      {text}
    </a>
  );
};

export default SmallButton;
