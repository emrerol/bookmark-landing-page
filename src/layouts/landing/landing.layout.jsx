import "./landing.style.scss";
import Hero from "../../images/illustration-hero.svg";

export default function Landing() {
    
    return (
        <div className="landingdiv">
            <div className="bluesurface"></div>
            <div className="landingleftside">
                <h1 className="h1">A Simple Bookmark Manager</h1>
                <p className="parag">A clean and simple interface to organize your
                favourite websites. Open a new browser tab and
                see your sites load instantly. Try it for free.</p>
                <div className="landingbuttonsdiv">
                    <button>Button1</button>
                    <button>Button2</button>
                </div>
            </div>
            <div className="landingrightside">
                <img src={Hero} alt="illustration_tablet" className="hero"/>
            </div>
        </div>
    )
}
