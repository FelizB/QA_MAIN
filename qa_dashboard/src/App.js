import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import ErrorElement from "./components/ErrorElement";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
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
        errorElement: <ErrorElement />,
      },
      {
        path: "product-houses",
        element: <ProductHouses />,
        errorElement: <ErrorElement />,
      },
      {
        path: "all-tasks",
        element: <AllTasks />,
        loader: allTasksLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "add-task",
        element: <AddTask />,
        action: addTaskAction,
        errorElement: <ErrorElement />,
      },
      {
        path: "edit-task/:id",
        element: <EditTask />,
        loader: editTaskLoader,
        action: editTaskAction,
        errorElement: <ErrorElement />,
      },
      {
        path: "delete-task/:id",
        element: <DeleteTask />,
        loader: deleteTaskLoader,
        action: deleteTaskAction,
        errorElement: <ErrorElement />,
      },
      {
        path: "admin",
        element: <Admin />,
        loader: adminLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "profile",
        element: <Profile />,
        action: profileAction,
        errorElement: <ErrorElement />,
      },
      {
        path: "view-profile",
        element: <ViewProfile />,
        errorElement: <ErrorElement />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <ErrorElement />,
      },
    ],
  },

  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
