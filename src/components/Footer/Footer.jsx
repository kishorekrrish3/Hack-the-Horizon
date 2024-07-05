import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-title">
        HACK THE <span className="footer-title-1">HORIZON</span>
      </h1>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/aiclubvitc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/insta.svg"
            alt="Instagram"
            className="footer-social"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aiclubvitc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="footer-social"
          />
        </a>
        <a
          href="https://open.spotify.com/show/3YzwNQKLLkPGV6BCLaLGne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/spotify.svg"
            alt="Spotify"
            className="footer-social"
          />
        </a>
      </div>

      <p className="copyright">
        © Artificial Intelligence Club 2024 - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
