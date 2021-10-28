/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import airbus from "../../assets/airbus.png";
import amazon from "../../assets/amazon_PNG21 1.png";
import barclays from "../../assets/barclays.png";
import cocacola from "../../assets/cocacola_logo_PNG14 1.png";
import delliote from "../../assets/delloite.png";
import wework from "../../assets/wework.png";
import './styles.css'

export default function LeadingCompanies() {
  return (

    
    <>
        {/* Leading Companies Component */}

    <div className="leading-companies">
      <h2>Trusted by leading companies</h2>
      <p>Sales people from leading companies are using Breaking Mars in order to gain maximum visibility on <br></br> LinkedIn and always stay in front of their prospects.</p>
      <div className="flex-container">
        <img src={delliote} />
        <img src={cocacola} />
        <img src={wework} />
        <img src={airbus} />
        <img src={barclays} />
        <img src={amazon} />
      </div>
    </div>
      
    </>
  );
}
