import React from "react";
import "../styles.css";

const Cards = ({ name, position, imgSrc, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="380"
          viewBox="0 0 264 409"
          fill="#060311"
        >
          <path
            d="M2 1H1V2V367.5V368.361L1.85166 368.489L261.852 407.489L263 407.661V406.5V2V1H262H2Z"
            fill="#0D0137"
            stroke="#2A086A"
            stroke-width="2"
            className="card-bg-img"
          />
        </svg>
        <img src={imgSrc} alt={name} className="card-img" />

        <h1 className="card-name">{name}</h1>
        <p className="card-position">{position}</p>

        <button className="card-btn">
          <img src="/assets/arrow.svg" className="card-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
