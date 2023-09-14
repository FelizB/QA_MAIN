import React from "react";
import "../assets/styles/dashLayout.css";

import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import logo from "../assets/images/logo.jpg";
import LogOutContainer from "./LogOutContainer";
import { Theme } from "./indexComponents";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <nav class="navbar nav bg-body-tertiary">
      <div class="container-fluid">
        <button
          type="button"
          className="btn nav-button"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div className="nav-title">
          <img src={logo} className="nav-img" alt="" />
          <img src={logo} className="nav-img" alt="" />
          <h6>
            <strong>
              QA <span>MASTER</span>
            </strong>
          </h6>
        </div>
        <button className="btn">TEST</button>
        <Theme />
        <span class="navbar-brand mb-0 h1">
          <LogOutContainer />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
