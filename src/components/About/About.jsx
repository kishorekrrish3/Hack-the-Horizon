import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">ABOUT US</h1>
      <div className="about-container">
        <div className="about-cont-1">
          <p className="about-text">
            Artificial Intelligence club (AIC) is a very new club of VIT
            Chennai, dedicated to exploring the exciting world of artificial
            intelligence. Through Workshops, Tech Talks, Research Forums &
            Hackathons to show up your skills and improve the abilities to
            analyze, and develop your knowledge in this deep field. Our main
            goal is to serve as a vital link connecting academia with industry,
            facilitating collaboration and knowledge exchange between the
            academic realm and the dynamic world of industry.
          </p>
        </div>
        <div className="about-cont-2">
          <img src="/assets/robot.svg" alt="Robot" className="about-robot" />
        </div>
      </div>
    </div>
  );
};

export default About;
