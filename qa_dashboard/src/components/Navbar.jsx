import React from "react";
import "../assets/styles/dashLayout.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import logo from "../assets/images/logo.jpg";
import LogOutContainer from "./LogOutContainer";
import { ProfileDropdown, Theme } from "./indexComponents";
import NotificationsView from "./NotificationsView";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <nav className="navbar navDash bg-body-tertiary">
      <div className="container-fluid">
        <button
          type="button"
          className="btn nav-button"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div className="nav-title">
          <img src={logo} className="nav-img" alt="" />
          <h6>
            <strong>
              QA <span>MASTER</span>
            </strong>
          </h6>
        </div>
        <form class="d-none d-md-flex input-group w-auto my-auto">
          <input
            autocomplete="off"
            type="search"
            class="form-control rounded"
            placeholder='Search (ctrl + "/" to focus)'
          />
          <span class="input-group-text border-0">
            <SearchIcon />
          </span>
        </form>
        <div className="nav-items2">
          <div>
            <NotificationsView />
          </div>
          <div className="theme-icon">
            <Theme />
          </div>
          <span className="navbar-brand mb-0 h1">
            <ProfileDropdown />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
