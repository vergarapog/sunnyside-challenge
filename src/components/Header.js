import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header-container">
      <div className="nav-container">
        <div className="logo">sunnyside</div>
        <Navbar />
      </div>
      <div className="title">
        We are creatives
        <svg
          className="arrow"
          width="36"
          height="114"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
