import "./extension-card.style.scss"
import { useContext } from "react";
import { ButtonContext } from "../../contexts/button.context";
import LargeButton from "../large-button/large-button.component";

export default function ExtensionCard({icon,browserName,minVersion}) {
    const {buttonType} = useContext(ButtonContext)
    const { largeBlueButton } = buttonType;

    return (
        <div className="extensioncard">
            <img src={icon} alt="browser" className="icon"/>
            <h2>Add to {browserName}</h2>
            <p>Minimum version {minVersion}</p>
            <hr />
            <LargeButton text={"Add & Install Extension"} colorName={largeBlueButton} href={"#"}/>
            
        </div>
    )
}
