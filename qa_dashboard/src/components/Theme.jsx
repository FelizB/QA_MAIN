import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/DashboardLayout";
import "../assets/styles/dashLayout.css";
const Theme = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <div className="toggle-icon" onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="backlight" />
      ) : (
        <BsFillMoonFill />
      )}
      {isDarkTheme ? <BsFillSunFill className="" /> : <BsFillMoonFill />}
    </div>
  );
};

export default Theme;
