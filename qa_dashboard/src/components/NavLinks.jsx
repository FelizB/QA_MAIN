import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { links, manual, automation, admin, profile } from "../utils/links";
import { NavLink } from "react-router-dom";
import "../assets/styles/SmallSidebar.css";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { Role } = user;
        if (path === "admin" && Role !== "Admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className={"nav-link"}
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
const NavLinksManual = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {manual.map((link) => {
        const { text, path, icon } = link;
        const { Role } = user;
        if (path === "admin" && Role !== "Admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className={"nav-link"}
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
const NavLinksAutomation = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {automation.map((link) => {
        const { text, path, icon } = link;
        const { Role } = user;
        if (path === "admin" && Role !== "Admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className={"nav-link"}
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
const NavLinksAdmin = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {admin.map((link) => {
        const { text, path, icon } = link;
        const { Role } = user;
        if (path === "admin" && Role !== "Admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className={"nav-link"}
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
const NavLinksProfile = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {profile.map((link) => {
        const { text, path, icon } = link;
        const { Role } = user;
        if (path === "admin" && Role !== "Admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className={"nav-link"}
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export {
  NavLinks,
  NavLinksManual,
  NavLinksAutomation,
  NavLinksAdmin,
  NavLinksProfile,
};
