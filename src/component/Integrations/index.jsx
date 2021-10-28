/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo2 from  "../../assets/Logo 2.png";
import Logo5 from  "../../assets/Logo 5.png";
import logoLight from  "../../assets/logo-light.png";
import Logo15 from  "../../assets/Logo 15.png";
import Logo16 from  "../../assets/Logo 16.png";
import Logo18 from  "../../assets/Logo 18.png";
import Group2629 from  "../../assets/Group 2629.png";

import logo11 from  "../../assets/Logo 11.png";
import logo6 from  "../../assets/Logo 6.png";
import logo1111 from  "../../assets/Logo 1111.png";
import logo1112 from  "../../assets/Logo 1112.png";
import logo7 from  "../../assets/Logo 7.png";
import Ellipse113 from  "../../assets/Group 2624.png";
import logo12 from  "../../assets/Logo 12.png";

import './styles.css'

export default function Integration() {
  return (
    <>
        {/* Integration Component */}
        
    <div className="integration">
    <button>Upcoming</button>
      <h2>Over 100+ Integrations</h2>
      <p>Integrate with all the marketing & social apps you use everyday.</p>
      <div className="flex-container1">
      <img src={Logo2} />
      <img src={Logo5} />
      <img className="logo-light" src={logoLight} />
      <img src={Logo15} />
      <img src={Logo16} />
      <img src={Group2629} />
      <img src={Logo18} />
      </div>
      <div className="flex-container2">
      <img src={logo11} />
      <img src={logo6} />
      <img src={logo7} />
      <img src={logo1112} />
      <img src={logo1111} />
      <img src={Ellipse113} />
      <img src={logo12} />
      </div>

    </div>
    </>
  );
}