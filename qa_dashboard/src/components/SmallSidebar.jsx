import React from "react";
import "../assets/styles/SmallSidebar.css";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <div className="smallSidebar">
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
