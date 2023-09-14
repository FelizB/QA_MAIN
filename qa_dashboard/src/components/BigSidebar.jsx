import React from "react";
import "../assets/styles/BigSidebar.css";
import NavLinks from "./NavLinks";
import { useDashboardContext } from "../pages/DashboardLayout";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <div className="BigSidebar">
      <div className="">
        <div className="title">
          <h4>
            QA <span>MASTER</span>
          </h4>
        </div>
        <hr />
        <div className="container">
          <NavLinks isBigSidebar />
        </div>
      </div>
    </div>
  );
};

export default BigSidebar;
