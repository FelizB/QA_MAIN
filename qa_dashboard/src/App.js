import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  Admin,
} from "./pages/indexPages";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },

  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
