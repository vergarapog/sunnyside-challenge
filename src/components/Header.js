import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header-container">
      <div className="nav-container">
        <div className="logo">sunnyside</div>
        <Navbar />
      </div>
      <div className="title">We are creatives</div>
    </header>
  );
};

export default Header;
