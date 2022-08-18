import "./landing.style.scss";
import { useContext } from "react";
import { ButtonContext } from "../../contexts/button.context";
import Hero from "../../images/illustration-hero.svg";
import MediumButton from "../../components/medium-button/medium-button.component";
export default function Landing() {
  const { buttonType } = useContext(ButtonContext);

  const { mediumBlueButton, mediumGreyButton } = buttonType;

  return (
    <section className="landing">
      <div className="landing__left">
        <h1 className="h1">A Simple Bookmark Manager</h1>
        <p className="parag">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="landingbuttonsdiv">
          <MediumButton
            href={"#"}
            text={"Get it on Chrome"}
            colorName={mediumBlueButton}
          />
          <MediumButton
            href={"#"}
            text={"Get it on Firefox"}
            colorName={mediumGreyButton}
          />
        </div>
      </div>

      <div className="landingrightside">
        <img src={Hero} alt="illustration_tablet" className="hero" />
      </div>
    </section>
  );
}
