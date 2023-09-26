import React from "react";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import { useLoaderData, redirect } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StatItem from "../components/StatItem";
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
      <StatItem
        title="current users"
        count={Users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<WorkIcon />}
      />
      <StatItem
        title="Total Tasks"
        count={Tasks}
        color="#e647acb"
        bcg="#e0e8f9"
        icon={<EventAvailableIcon />}
      />
    </div>
  );
};

export default Admin;
