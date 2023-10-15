import React, { createContext, useContext, useState } from "react";
import "../assets/styles/dashLayout.css";
import {
  SmallSidebar,
  BigSidebar,
  Navbar,
} from "../components/indexComponents";
import {
  Outlet,
  useLoaderData,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import BackDroper from "../components/BackDroper";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

//create a global dashboard layout of all functionalities
const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
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
    try {
      await customFetch.post("/auth/logout");
      toast.success("logging out");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data);
      return error;
    }
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
            <div className="col-2 bigSideNone bigSide">
              <BigSidebar />
            </div>
            <div className="col dashFull">
              <Navbar className="navComponent" />
              <div className="dashboardPage">
                {isPageLoading ? <BackDroper /> : <Outlet context={{ user }} />}
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
