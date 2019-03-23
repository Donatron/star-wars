import React from "react";
import "./Logo.css";
import logo from "./Logo.png";

const Logo = () => {
  return (
    <div>
      <img alt="star wars logo" src={logo} className="logo" />
    </div>
  );
};

export default Logo;
