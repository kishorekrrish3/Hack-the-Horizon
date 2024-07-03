import React from "react";
import "../styles.css"; // Assuming your CSS file is named Prizes.css

const Prizes = () => {
  return (
    <div className="prizes">
      <h1 className="prizes-title">EXCITING BOUNTIES AWAIT!</h1>
      <div className="prizes-container">
        <div className="prizes-card-container">
          <div className="prize-card-1 prize-card">
            <div className="prize-icon-cont">
              <img
                src="/assets/mobile.svg"
                alt="mobile"
                className="prize-card-icon"
              />
            </div>
            <div className="prize-card-text-cont">
              <p className="prize-card-text">
                Smart phones and Tech Gadgets for innovative contributions
              </p>
            </div>
          </div>

          <div className="prize-card-2 prize-card">
            <div className="prize-icon-cont">
              <img
                src="/assets/laptop.svg"
                alt="laptop"
                className="prize-card-icon"
              />
            </div>
            <div className="prize-card-text-cont">
              <p className="prize-card-text">Opportunities for Internships</p>
            </div>
          </div>

          <div className="prize-card-3 prize-card">
            <div className="prize-icon-cont">
              <img
                src="/assets/book.svg"
                alt="book"
                className="prize-card-icon"
              />
            </div>
            <div className="prize-card-text-cont">
              <p className="prize-card-text">
                Special recognition in Industry Publications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
