import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/Hamburger";
import { useState, useEffect } from "react";

import "./navbar.sass";

const Navbar = () => {
  const [click, setClick] = useState(0);
  const [className, setClassName] = useState("navbar");
  const [hamburgerName, setHamburgerName] = useState("hamburger");

  const onMobile = () => {
    if (!click) {
      setClick(1);
    } else {
      setClick(0);
    }
  };
  useEffect(() => {
    if (click) {
      setClassName("navbar navbar_active");
      setHamburgerName("hamburger hamburger_active");
    } else {
      setClassName("navbar");
      setHamburgerName("hamburger");
    }
  }, [click]);

  return (
    <nav>
      <div className="container">
        <ul className={className}>
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
      </div>
      <Hamburger onMobile={onMobile} hamburgerName={hamburgerName} />
    </nav>
  );
};

export default Navbar;
