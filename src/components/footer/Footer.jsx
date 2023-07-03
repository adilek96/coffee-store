import React, { Component } from "react";
import { Link } from "react-router-dom";
import Beans from "../beans/Beans";
import "./footer.sass";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-nav-wrapper">
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/">Coffee house</Link>
              </li>
              <li>
                <Link to="/our-coffee">Our coffee</Link>
              </li>
              <li>
                <Link to="/for-your-pleasure">For your pleasure</Link>
              </li>
            </ul>
          </nav>
          <Beans />
        </div>
      </footer>
    );
  }
}
