import React from "react";
import "./styles.css";
function Home() {
  return (
    <>
    {/* Home Section */}
    
      <div className="home-container">
        <div className="home">
          <h2>
            Get the <span className="yellow">impossible</span> done <br /> by
            next generation automation
          </h2>
          <p className="home-para">
            We make your life easier by bing one stop solution for b2B Marketing
          </p>
          <div className="try-btn-container">
            <button className="try-btn btn">Try 14 days for free</button>
          </div>
          <p>No credit card Required</p>
        </div>
      </div>
    </>
  );
}

export default Home;
