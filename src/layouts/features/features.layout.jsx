import React from 'react'
import "./features.style.scss";
import Tab1 from "../../images/illustration-features-tab-1.svg";
import Tab2 from "../../images/illustration-features-tab-2.svg";
import Tab3 from "../../images/illustration-features-tab-3.svg";
import { useContext } from "react";
import SmallButton from "../../components/small-button/small-button.component";
import { ButtonContext } from "../../contexts/button.context";
import { useState } from 'react';

export default function Features() {
  const { buttonType } = useContext(ButtonContext);
  const { smallBlueButton } = buttonType;
  const [tab,setTab]  = useState({
    tab1: true,
    tab2: false,
    tab3: false
  });


  function clickHandle(e){
    switch(e.target.name){
      case "simple":
        setTab({
          tab1:true,
          tab2:false,
          tab3:false
        });
        e.target.classList.add('simple');
        document.getElementById('speedy').classList.remove('simple');
        document.getElementById('easy').classList.remove('simple');
        break;
      case "speedy":
        setTab({
          tab1:false,
          tab2:true,
          tab3:false
        });
        e.target.classList.add('simple');
        document.getElementById('simple').classList.remove('simple');
        document.getElementById('easy').classList.remove('simple');
        break;
      case "easy":
        setTab({
          tab1:false,
          tab2:false,
          tab3:true
        });
        e.target.classList.add('simple');
        document.getElementById('simple').classList.remove('simple');
        document.getElementById('speedy').classList.remove('simple');
        break;
      default:
        break;
  }
  
  }

  

  return (  
    <div className='featuresdiv'> 
        <h1>Features</h1>
        <p> Our aim is to make it quick and easy you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <div className='buttonsdiv'>
          <button className='button simple' id='simple' onClick={clickHandle} name="simple">Simple Bookmarking</button>
          <button className='button' id='speedy' onClick={clickHandle} name="speedy">Speedy Searching</button>
          <button className='button' id='easy' onClick={clickHandle} name="easy">Easy Sharing</button>
        </div>

        {
          tab.tab1
          &&
          <div className='tabdiv'>
            <img className='tabsillustration' src={Tab1} alt="illustration_tablet"></img>
            <div className='featuresrightside'>
              <h1>Bookmark in one click</h1>
              <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
              <SmallButton className='btnmoreinfo' href={"#"} text={"More Info"} colorName={smallBlueButton}/>
            </div>
          </div>
        }
        {
          tab.tab2 
          &&
          <div className='tabdiv'>
            <img className='tabsillustration' src={Tab2} alt="illustration_tablet"></img>
            <div className='featuresrightside'>
              <h1>Intelligent search</h1>
              <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
              <SmallButton className='btnmoreinfo' href={"#"} text={"More Info"} colorName={smallBlueButton}/>
            </div>
          </div>
        }
        {
          tab.tab3
          &&
          <div className='tabdiv'>
            <img className='tabsillustration' src={Tab3} alt="illustration_tablet"></img>
            <div className='featuresrightside'>
              <h1>Share your bookmarks</h1>
              <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
              <SmallButton href={"#"} text={"More Info"} colorName={smallBlueButton}/>
            </div>
          </div>
        }
        

    </div>
  )
}
