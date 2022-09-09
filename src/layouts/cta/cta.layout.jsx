import "./cat.style.scss";
import SmallButton from "../../components/small-button/small-button.component";
import { useContext } from "react";
import { ButtonContext } from "../../contexts/button.context";

const CallToAction = () => {
  const { buttonType } = useContext(ButtonContext);
  const { smallRedButton } = buttonType;

  return (
    <div className="cat">
      <div className="cat--texts">
        <p>35.000+ already joined</p>
        <h3>Stay up-to-date with what we're doing</h3>
      </div>
      <form className="cat--form">
        <input type="text" required placeholder="Enter tour email address" />
        <SmallButton text={"Contact Us"} colorName={smallRedButton} />
      </form>
    </div>
  );
};

export default CallToAction;
