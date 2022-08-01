import "./small-button.styles.scss";

const SmallButton = ({ text, colorName }) => {
  return <a className={`sml-btn ${colorName}`}>{text}</a>;
};

export default SmallButton;
