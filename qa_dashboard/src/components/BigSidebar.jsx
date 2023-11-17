import React, { useState, useEffect } from "react";
import "../assets/styles/BigSidebar.css";
import AccordionComponent from "./AccordionComponent";
import { MdAdminPanelSettings } from "react-icons/md";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import { useDashboardContext } from "../pages/DashboardLayout";
import {
  NavLinks,
  NavLinksManual,
  NavLinksAutomation,
  NavLinksAdmin,
  NavLinksProfile,
} from "./NavLinks";

//import { useDashboardContext } from "../pages/DashboardLayout";

const BigSidebar = () => {
  //const { showSidebar } = useDashboardContext();
  const { user } = useDashboardContext();
  const { Role } = user;

  return (
    <div className="BigSidebar">
      <div className="">
        <div className="title">
          <h4>
            QA <span>MASTER</span>
          </h4>
        </div>
        <hr />
        <div className="container sidebar-body">
          <NavLinks isBigSidebar />

          <AccordionComponent
            title=" Manual "
            childlings={<NavLinksManual isBigSidebar />}
            icon={<AddTaskIcon className="md-icon" />}
          />

          <AccordionComponent
            title=" Automation "
            childlings={<NavLinksAutomation isBigSidebar />}
            icon={<AutoModeIcon className="md-icon" />}
          />
          <AccordionComponent
            title="Administration"
            childlings={<NavLinksAdmin isBigSidebar />}
            icon={<MdAdminPanelSettings className="md-icon" />}
          />
        </div>
        <div className="container sidebar-footer">
          <div className="sidebar-footer-body">
            <NavLinksProfile isBigSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSidebar;
