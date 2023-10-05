import React from "react";
import "./css/landing.css";
import Logo from "../../Logo";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Navbar() {
  window.onscroll = function (event) {
    if (this.scrollY > 120) {
      let item = document.querySelector("#nav");
      item.setAttribute("class", "navbar navbar-scroll");
    } else if (this.scrollY < 120) {
      let item = document.querySelector("#nav");
      item.setAttribute("class", "navbar");
    }
  };

  function OpenMenu() {
    var icon = document.querySelector("#navitems");
    if (icon.style.display === "block") {
      icon.style.display = "none";
    } else {
      icon.style.display = "block";
      let item = document.querySelector("#nav");
      item.setAttribute("class", "navbar navbar-scroll");
    }
  }
  return (
    <nav id="nav" className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <a
        id="NavCollapse"
        className="NavCollapse"
        href="#nav"
        onClick={OpenMenu}
      >
        <MenuIcon className="menu" />
      </a>
      <div id="navitems" className="nav-items-container">
        <ul>
          <li className="nav-items">
            <a href="#Land">Home</a>
          </li>
          <li className="nav-items">
            <a href="#Features">Features</a>
          </li>
          <li className="nav-items">
            <a href="#About">About Us</a>
          </li>
          <li className="nav-items">
            <a href="#Testimonial">Testimonials</a>
          </li>
          <li className="nav-items">
            <a href="#Faq">FAQ</a>
          </li>
          <li className="nav-items">
            <a href="#Footer">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
