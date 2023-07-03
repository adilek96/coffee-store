import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import "./secondHeader.sass";

export default class SecondHeader extends Component {
  render() {
    return (
      <header className="second-header">
        <Navbar />
        <h1>Our coffee</h1>
      </header>
    );
  }
}
