import React from "react";
import Navbar from "../../navbar/Navbar";
import "./secondHeader.sass";

const SecondHeader = () => {
  return (
    <header className="second-header">
      <Navbar />
      <h1>Our coffee</h1>
    </header>
  );
};

export default SecondHeader;
