import React from "react";
import logo from "../assets/images/logo.jpg";
import "../assets/styles/landing.css";
const Logo = () => {
  return (
    <div className="logoNav">
      <img src={logo} alt="qa" className="logo" />
      <h2>QA Master</h2>
    </div>
  );
};

export default Logo;
