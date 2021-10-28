/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import GDPR from  "../../assets/GDPR-cuate 1.png";


import './styles.css'

export default function AdvancedAlgorithm() {
  return (
    <>
        {/* Advanced Algorithm Component */}
        
    <div className="advanced-algorithm">
      <h2>Advanced algorithm to keep your <br/> LinkedIn account safe</h2>
      <div className="flex-container">
      <img src={GDPR} />
      <p>Once a new user starts a free trial with Breaking Mars,<br/> they get a unique IP-address from their local region <br/>assigned to their account.
      <br/>
      <br/>
In addition to human behavior simulation, cloud-based<br/> performance and activity control features, LinkedIn<br/> prospecting with Breaking Mars becomes completely<br/> safe and secure.</p>
      </div>
    </div>
    </>
  );
}