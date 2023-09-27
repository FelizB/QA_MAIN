import React from "react";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import { useLoaderData, redirect } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { StatItemUsers, StatItemTasks } from "../components/StatItem";
import "../assets/styles/components.css";

export const adminLoader = async () => {
  try {
    const response = await customFetch.get("/users/Admin/app-starts");

    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { Users, Tasks } = useLoaderData();

  return (
    <div className="stats-container">
      <StatItemUsers
        className="item-users"
        title="current users"
        count={Users}
        icon={<WorkIcon />}
      />
      <StatItemTasks
        className="item-tasks"
        title="Total Tasks"
        count={Tasks}
        icon={<EventAvailableIcon />}
      />
    </div>
  );
};

export default Admin;
