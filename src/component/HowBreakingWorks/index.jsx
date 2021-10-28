/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReviewCuate from "../../assets/Online Review-cuate 1.png";
import financeCuate from "../../assets/Finance-cuate 1.png";
import SEOPana from "../../assets/SEO-pana 1.png";
import './styles.css'

export default function HowBreakingWorks() {
  return (
    <>
        {/* How Breaking Works Component */}

    <div className="how-breaking-works">
      <h2 className="head">How Breaking Mars Works?</h2>
      <p className="para">3 very Simple Steps</p>
      <div className="grid-container">
      <div className="flex-container step1">
     <div className="left container">
     <img src={SEOPana} />
     </div>
     <div className="right container">
     <p className="step">
      STEP-1
       </p>
       <h3>Quickly locate your perfect consumer</h3>
     <p>
     LinkedIn groups and events, as well as built-in <br></br> LinkedIn search and interfaces with other tools.<br></br> Breaking Mars offers everything you need to find and<br></br> acquire the best connectors for expanding your<br></br> pipeline.
       </p>

     </div>
      </div>
      
      <div className="flex-container step2">
     <div className="right container">
     <p className="step">
      STEP-2
       </p>
       <h3>Make sequences for your campaigns</h3>
     <p>
     Use profile views, endorsements, connection requests, <br></br>Linkedin messages, InMails, Emails, and Twitter DMs<br></br>  to engage your prospects. Personalize your sequences<br></br>  based on how people respond, and use<br></br> personalization snippets to make each action appear <br></br>real.
       </p>

     </div>
     <div className="left container">
     <img src={ReviewCuate} />
     </div>
      </div>

      <div className="flex-container step3">
     <div className="left container">
     <img src={financeCuate} />
     </div>
     <div className="right container">
     <p className="step">
      STEP-3
       </p>
       <h3>Improve your outcomes by optimizing</h3>
     <p>
     Breaking Mars performance analytics can help you <br></br>  improve the outcomes of your multi-channel initiatives.<br></br> Make every team member a winner, and collectively <br></br> you'll be able to generate more money.
       </p>

     </div>
      </div>
      </div>
    </div>
      
    </>
  );
}
