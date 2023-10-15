import React from "react";
import "../assets/styles/SmallSidebar.css";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import {
  NavLinks,
  NavLinksManual,
  NavLinksAutomation,
  NavLinksProfile,
} from "./NavLinks";

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
          <div className="small-sidebar-body">
            <NavLinks />
            <NavLinksManual />
            <NavLinksAutomation />
            <NavLinksProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
