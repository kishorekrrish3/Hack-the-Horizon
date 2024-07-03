import React from "react";

const Countdown = () => {
  return (
    <div className="countdown">
      <div className="countdown-container">
        <div className="days-container cont">
          <div className="box-1 box">
            <div className="box-1-1">1</div>
            <div className="box-1-2">2</div>
            <p className="colon">:</p>
          </div>
          <p className="caption-1 caption">DAYS</p>
        </div>
        <div className="hours-container cont">
          <div className="box-2 box">
            <div className="box-2-1">3</div>
            <div className="box-2-2">4</div>
            <p className="colon">:</p>
          </div>
          <p className="caption-2 caption">HOURS</p>
        </div>
        <div className="minutes-container cont">
          <div className="box-3 box">
            <div className="box-3-1">5</div>
            <div className="box-3-2">6</div>
            <p className="colon">:</p>
          </div>
          <p className="caption-3 caption">MINUTES</p>
        </div>
        <div className="seconds-container cont">
          <div className="box-4 box">
            <div className="box-4-1">7</div>
            <div className="box-4-2">8</div>
          </div>
          <p className="caption-4 caption">SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
