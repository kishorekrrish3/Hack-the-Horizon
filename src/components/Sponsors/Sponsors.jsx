import React from "react";
import "../styles.css"; // Assuming your CSS file is named Sponsors.css

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h1 className="sponsors-title">OUR SPONSORS</h1>
      <div className="sponsors-container">
        <div className="sponsor-1">
          <img
            src="/assets/edufic-1.png"
            alt="Edufic"
            className="sponsor-img-1"
          />
          <p className="sponsor-1-title">EDUFIC DIGITAL</p>
        </div>
        <div className="sponsor-2">
          <img
            src="/assets/zuntra-1.png"
            alt="Zuntra"
            className="sponsor-img-1"
          />
          <p className="sponsor-2-title">ZUNTRA DIGITAL</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
