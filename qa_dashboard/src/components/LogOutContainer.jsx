import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import "../assets/styles/logOutContainer.css";

const LogOutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logOutUser } = useDashboardContext();
  return (
    <div className="logoutBtn">
      <button
        type="button"
        className="btn logBtn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img space" />
        ) : (
          <FaUserCircle className="space" />
        )}
        {user.First_Name}

        <FaCaretDown className="space" />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <div className="LogList">
          <button
            type="button"
            className="dropdown-btn btn"
            onClick={logOutUser}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutContainer;
