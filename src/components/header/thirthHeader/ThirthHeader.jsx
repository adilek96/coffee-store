import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import "./thirthHeader.sass";

export default class ThirthHeader extends Component {
  render() {
    return (
      <header className="thirth-header">
        <Navbar />
        <h1>For your pleasure</h1>
      </header>
    );
  }
}
