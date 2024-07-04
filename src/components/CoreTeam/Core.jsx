import React from "react";
import Cards from "../Cards/Cards";

const Core = () => {
  return (
    <div className="core">
      <h1 className="core-title">CORE TEAM</h1>
      <div className="core-container core-cont-1">
        <Cards
          name="Jeswanth S"
          position="Overall Coordinator"
          imgSrc="/assets/jeswanth.png"
        />
        <Cards
          name="Kishore P"
          position="Overall Coordinator"
          imgSrc="/assets/kishore.png"
        />
        <Cards
          name="Adhvaitha B"
          position="Overall Coordinator"
          imgSrc="/assets/adhvaitha.png"
        />
        <Cards
          name="Salman Farish"
          position="Overall Coordinator"
          imgSrc="/assets/salman.png"
        />
        <Cards
          name="Puvanesh Y A"
          position="Overall Coordinator"
          imgSrc="/assets/puvanesh.png"
        />
        <Cards
          name="Karan K"
          position="Overall Coordinator"
          imgSrc="/assets/karan-k.png"
        />
      </div>
      <h1 className="core-title-2">TEAM MEMBERS</h1>
      <div className="core-container">
        <Cards
          name="Tarun Parthiban"
          position="Technical Lead"
          imgSrc="/assets/tarun-p.png"
        />
        <Cards
          className="guru-card"
          name="Guru Prasaath Manirajan"
          position="Technical Lead"
          imgSrc="/assets/guru.png"
        />
        <Cards
          name="Logesh Kaavyan"
          position="Technical Lead"
          imgSrc="/assets/logesh.png"
        />
        <Cards
          name="Sri Lekha R"
          position="Content & Design Lead"
          imgSrc="/assets/srilekha.png"
        />
        <Cards
          className="aashik-card"
          name="Mohammed Aashik"
          position="Content & Design Lead"
          imgSrc="/assets/aashik.png"
        />
        <Cards
          name="Jeeva M"
          position="Content & Design Lead"
          imgSrc="/assets/jeeva.png"
        />
        <Cards
          className="vidhu-card"
          name="Vidhu Kishore PSK"
          position="Content & Design Lead"
          imgSrc="/assets/vidhu.png"
        />
        <Cards
          className="special-card"
          name="Smitha Gladius TS"
          position="Operations & Management Lead"
          imgSrc="/assets/smitha.png"
        />
        <Cards
          className="special-card"
          name="Anu Vishali"
          position="Operations & Management Lead"
          imgSrc="/assets/anu.png"
        />
        <Cards
          className="special-card"
          name="Nishaanth M N"
          position="Operations & Management Lead"
          imgSrc="/assets/nishaanth.png"
        />
        <Cards
          className="special-card"
          name="Devadarishini S"
          position="Social Media & Outreach Lead"
          imgSrc="/assets/dd-1.png"
        />
        <Cards
          className="special-card-2"
          name="Sujeeth R"
          position="Social Media & Outreach Lead"
          imgSrc="/assets/sujeeth.png"
        />
        <Cards
          className="special-card-2"
          name="Karan P S"
          position="Social Media & Outreach Lead"
          imgSrc="/assets/karan-ps.png"
        />
        <Cards
          className="special-card-2"
          name="Devadharshini S"
          position="Marketing & 
Public Relation Lead"
          imgSrc="/assets/dd-2.png"
        />
        <Cards
          className="special-card-2"
          name="Kavya P"
          position="Marketing & 
Public Relation Lead"
          imgSrc="/assets/kavya-p.png"
        />
        <Cards
          className="special-card-2"
          name="Tharun S K"
          position="Marketing & 
Public Relation Lead"
          imgSrc="/assets/tarun-sk.png"
        />
      </div>
    </div>
  );
};

export default Core;
