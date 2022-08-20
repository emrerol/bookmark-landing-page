import ExtensionCard from "../../components/extension-card/extension-card.component";
import "./extension.style.scss";
import Chrome from "../../images/logo-chrome.svg";
import Firefox from "../../images/logo-firefox.svg";
import Opera from "../../images/logo-opera.svg";

export default function Extension() {
  return (
    <section className="extension">
        <div className="texts">
            <h1>Download the extension</h1>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>
        <div className="cardsdiv">
          <div className="chrome"> 
            <ExtensionCard icon={Chrome} browserName={"Chrome"} minVersion={62}/>
          </div>
          <ExtensionCard icon={Firefox} browserName={"Firefox"} minVersion={55}/>
          <div className="opera">
            <ExtensionCard icon={Opera} browserName={"Opera"} minVersion={46}/>
          </div>
        </div>
    </section>
  )
}
