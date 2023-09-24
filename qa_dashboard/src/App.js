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
  Stats,
  AllTasks,
  AddTask,
  ProductHouses,
  EditTask,
} from "./pages/indexPages";
import { registerAction } from "./pages/Register";
import { loginAction } from "./pages/Login";
import { addTaskAction } from "./pages/AddTask";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allTasksLoader } from "./pages/AllTasks";
import { editTaskLoader } from "./pages/EditTask";
import { editTaskAction } from "./pages/EditTask";

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
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
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
    loader: dashboardLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Stats />,
      },
      {
        path: "product-houses",
        element: <ProductHouses />,
      },
      {
        path: "all-tasks",
        element: <AllTasks />,
        loader: allTasksLoader,
      },
      {
        path: "add-task",
        element: <AddTask />,
        action: addTaskAction,
      },
      {
        path: "edit-task/:id",
        element: <EditTask />,
        loader: editTaskLoader,
        action: editTaskAction,
      },
      {
        path: "admin",
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
