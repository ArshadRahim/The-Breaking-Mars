/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Zendesk from "../../assets/Zendesk.png";
import sales from "../../assets/sales.png";
import freshworks from "../../assets/freshworks.png";
import Airtable from "../../assets/Airtable.png";
import Amazon from "../../assets/Amazon.png";
import xmlid from "../../assets/XMLID1.png";
import './styles.css'

export default function GetRewards() {
  return (
    <>
        {/* GetRewards Component */}
        
    <div className="get-rewards">
      <h2>Also get $40,000+ USD Rewards</h2>
      <p>Curated library of 30+ startup offers valued more than $40k to support<br/> people like you when you are a Breaking Mars user. Learn more.</p>
      <div className="flex-container">
        <div>
          <div className="amazon"><img src={Amazon} /> <p>$5,000 USD in credit</p></div>
          <div className="zendesk"><img src={Zendesk} /><p>6 months free</p></div>
          <div className="xmlid"><img src={xmlid} /></div>
        </div>
        <div>
          <div className="freshworks"><img src={freshworks} /><p>$5,000 USD in credit</p></div>
          <div className="airtable"><img src={Airtable} /><p>$2,000 USD in credit</p></div>
          <div className="sales"><img src={sales} /><p>50% off for 1 year</p></div>
        
        
        
        </div>
      </div>
        <button>Try 30 days for free</button>
        <div className="line"></div>
    </div>
    </>
  );
}