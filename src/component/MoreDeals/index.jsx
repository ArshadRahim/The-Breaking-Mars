/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import fb from "../../assets/fb.png";
import google from "../../assets/google.png";
import linkedin from "../../assets/linkedin.png";
import ICON1 from "../../assets/ICON.png";
import ICON2 from "../../assets/Group 7.png";
import ICON3 from "../../assets/Group 8.png";
import './styles.css'

export default function MoreDeals() {
  return (
    <>
        {/* More Deals Component */}

    <div className="more-deals">
      <h2>Close more deals without <br></br> running any ads</h2>
      <p>When you run Facebook ads, Google Ads, Twitter ads or even Linkedin Ads, they <br></br> follow this exact same sales funnel accross all of their campaign. You’ll get the <br></br> same benefit here without spending any money on ads.
      </p>
      <div className="flex-container">
      <img src={fb} />
      <img src={google} />
      <img src={linkedin} />
        </div>
        <div className="awareness-flex">
          <div className="inner-flex-container inner-1">
            <img src={ICON1} />
            <h2>Awareness</h2>
            <p>The moment a user first discovers your brand, product, offer, etc. We create awareness by viewing your prospects profie, liking their recent post, endorsing their skills. </p>
          </div>
          <div className="inner-flex-container inner-2">
            <img src={ICON2} />
            <h2>Engagement</h2>
            <p>Engagement is the the when you connect with your prospect for the first time. In linkedin it can be making first degree connection or getting replies in comments. </p>
          </div>
          <div className="inner-flex-container inner-3">
            <img src={ICON3} />
            <h2>Conversion</h2>
            <p>Conversions are the number of people who follow through with a desired, measurable action. We make sure a greater number of conversion with carefully sequenced follow up messages.</p>
          </div>
        </div>
    </div>
      
    </>
  );
}
