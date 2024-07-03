import React from "react";
import "../styles.css"; // Import the updated CSS file

const Faculty = () => {
  return (
    <div className="faculty">
      <h1 className="faculty-title">FACULTY COORDINATORS</h1>
      <div className="faculty-container">
        <div className="faculty-1-cont">
          <img
            src="/assets/faculty-1.png"
            alt="Dhavakumar"
            className="faculty-1-img"
          />
          <div className="faculty-1-text-cont">
            <h1 className="faculty-1-name">Dr Dhavakumar</h1>
            <p className="faculty-1-position">Assistant Professor Sr</p>
          </div>
        </div>
        <div className="faculty-2-cont">
          <img
            src="/assets/faculty-2.png"
            alt="Sivabalakrishnan"
            className="faculty-2-img"
          />
          <div className="faculty-2-text-cont">
            <h1 className="faculty-2-name">Dr Sivabalakrishnan</h1>
            <p className="faculty-2-position">
              Program Chair Intg M.Tech CSE Business Analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
