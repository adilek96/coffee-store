import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import "./mainHeader.sass";

export default class MainHeader extends Component {
  render() {
    return (
      <header className="main-header">
        <Navbar />

        <div className="main-header-text">
          <h1>Everything You Love About Coffee</h1>
          <div className="header-beans">
            <span></span>
            <img src="../../img/coffee-beans-white.svg" alt="baeans" />
            <span></span>
          </div>
          <h2>We makes every day full of energy and taste</h2>
          <h2>Want to try our beans?</h2>
          <button type="button">More</button>
        </div>
      </header>
    );
  }
}
