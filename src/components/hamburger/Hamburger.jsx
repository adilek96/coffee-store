import React from "react";
import "./hamburger.sass";

export default function Hamburger({ onMobile, hamburgerName }) {
  return (
    <div className={hamburgerName} onClick={onMobile}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
