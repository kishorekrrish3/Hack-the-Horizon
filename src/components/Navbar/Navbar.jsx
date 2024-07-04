import React from "react";

const Navbar = ({ isFixed }) => {
  const classes = ["navbar"];
  if (isFixed) {
    classes.push("fixed"); // Add 'fixed' class for styling
  }

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // Smooth scroll logic
      const headerOffset = 0;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classes.join(" ")}>
      <div className="navbar-container">
        <img src="/assets/logo.svg" alt="HTH" className="navbar-logo" />
        <div className="navbar-links">
          <a
            href="#home"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>
          <a
            href="#timeline"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "timeline")}
          >
            Timeline
          </a>
          <a
            href="#sponsors"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "sponsors")}
          >
            Sponsors
          </a>
          <a
            href="#prizes"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "prizes")}
          >
            Prizes
          </a>
          <a
            href="#core"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "core")}
          >
            Core
          </a>
          <a
            href="#faq"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "faq")}
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="navbar-link"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
        </div>
        <div className="navbar-caption">Build Beyond Boundaries</div>
      </div>
    </div>
  );
};

export default Navbar;
