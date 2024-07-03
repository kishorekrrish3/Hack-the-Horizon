import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Bento from "./components/Bento/Bento";
import Contact from "./components/Contact/Contact";
import Core from "./components/CoreTeam/Core";
import Countdown from "./components/Countdown/Countdown";
import FAQ from "./components/FAQ/FAQ";
import Faculty from "./components/Faculty/Faculty";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Prizes from "./components/Prizes/Prizes";
import Sponsors from "./components/Sponsors/Sponsors";

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY > 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar isFixed={isFixed} />
      <div id="home">
        <Home />
      </div>
      <div id="countdown">
        <Countdown />
      </div>
      <div id="bento">
        <Bento />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <div id="faculty">
        <Faculty />
      </div>
      <div id="core">
        <Core />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
