import React from "react";
import "../styles.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">
        HACK THE <span className="home-title-gradient">HORIZON</span>
      </h1>
      <p className="home-subtitle">Build Beyond Boundaries</p>
      <button className="home-btn">Register now!</button>
    </div>
  );
};

export default Home;
