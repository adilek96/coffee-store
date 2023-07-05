import React from "react";
import { Link } from "react-router-dom";

import "./navbar.sass";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
