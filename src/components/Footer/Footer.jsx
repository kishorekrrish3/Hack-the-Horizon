import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-title">
        HACK THE <span className="footer-title-1">HORIZON</span>
      </h1>
      <div className="footer-icons">
        <img
          src="/assets/insta.svg"
          alt="Instagram"
          className="footer-social"
        />
        <img
          src="/assets/linkedin.svg"
          alt="LinkedIn"
          className="footer-social"
        />
        <img
          src="/assets/whatsapp.svg"
          alt="WhatsApp"
          className="footer-social"
        />
      </div>

      <p className="copyright">
        © Artificial Intelligence Club 2024 - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
