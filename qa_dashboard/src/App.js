import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import customFetch from "./utils/customfetch";
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
  Profile,
  ViewProfile,
  adminTaskView,
} from "./pages/indexPages";
import { registerAction } from "./pages/Register";
import { LoginAction } from "./pages/Login";
import { addTaskAction } from "./pages/AddTask";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allTasksLoader } from "./pages/AllTasks";
import { editTaskLoader } from "./pages/EditTask";
import { editTaskAction } from "./pages/EditTask";
import DeleteTask, { deleteTaskAction } from "./pages/DeleteTask";
import { deleteTaskLoader } from "./pages/DeleteTask";
import { adminLoader } from "./pages/Admin";
import { profileAction } from "./pages/Profile";
import { statsLoader } from "./pages/Stats";

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
        path: "login",
        element: <Login />,
        action: LoginAction,
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
        loader: statsLoader,
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
        path: "delete-task/:id",
        element: <DeleteTask />,
        loader: deleteTaskLoader,
        action: deleteTaskAction,
      },
      {
        path: "admin",
        element: <Admin />,
        loader: adminLoader,
      },
      {
        path: "profile",
        element: <Profile />,
        action: profileAction,
      },
      {
        path: "view-profile",
        element: <ViewProfile />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
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
