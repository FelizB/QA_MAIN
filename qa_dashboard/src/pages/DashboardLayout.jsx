import React, { createContext, useContext, useState } from "react";
import "../assets/styles/dashLayout.css";
import {
  SmallSidebar,
  BigSidebar,
  Navbar,
} from "../components/indexComponents";
import { Outlet } from "react-router-dom";
import { checkDefaultTheme } from "../App";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "Felix" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logOutUser = async () => {
    console.log("log out");
  };

  return (
    <div>
      <DashboardContext.Provider
        value={{
          user,
          showSidebar,
          isDarkTheme,
          toggleDarkTheme,
          toggleSidebar,
          logOutUser,
        }}
      >
        <main className="dashboard">
          <div className="row rowNice">
            <div className="smallSideFull">
              <SmallSidebar className="smallSide" />
            </div>
            <div className="col-2 bigSideNone">
              <BigSidebar className="bigSide" />
            </div>
            <div className="col dashFull">
              <Navbar />
              <div className="dashboardPage">
                <Outlet className="dashItems" />
              </div>
            </div>
          </div>
        </main>
      </DashboardContext.Provider>
    </div>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
