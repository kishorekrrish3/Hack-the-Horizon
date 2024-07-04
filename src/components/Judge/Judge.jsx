import React from "react";
import "../styles.css"; // Import the updated CSS file

const Judge = () => {
  return (
    <div className="judge">
      <h1 className="judge-title">FACULTY COORDINATORS</h1>
      <div className="judge-container">
        <div className="judge-1-cont">
          <img
            src="/assets/judge-1.png"
            alt="Dhavakumar"
            className="judge-1-img"
          />
          <div className="judge-1-text-cont">
            <h1 className="judge-1-name">Judge 1 name</h1>
            <p className="judge-1-position">Description for Judge 1</p>
          </div>
        </div>
        <div className="judge-2-cont">
          <img
            src="/assets/judge-2.png"
            alt="Sivabalakrishnan"
            className="judge-2-img"
          />
          <div className="judge-2-text-cont">
            <h1 className="judge-2-name">Judge 2 name</h1>
            <p className="judge-2-position">Description for Judge 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judge;
