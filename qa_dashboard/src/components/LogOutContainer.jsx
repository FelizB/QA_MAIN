import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import "../assets/styles/logOutContainer.css";
import { Link } from "react-router-dom";

const LogOutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <div className="logoutBtn">
      <button
        type="button"
        className="btn logBtn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle className="space" />
        {user.name}
        <FaCaretDown className="space" />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <div className="LogList">
          <button
            type="button"
            className="dropdown-btn btn"
            onClick={logoutUser}
          >
            logout
          </button>
          <ul>
            <li>
              <Link>Test 1</Link>
            </li>
            <li>
              <Link>Test 2</Link>
            </li>
            <li>
              <Link>Test 3</Link>
            </li>
            <br />
            <li>
              <button
                type="button"
                className="dropdown-btn btn"
                onClick={logoutUser}
              >
                logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogOutContainer;
