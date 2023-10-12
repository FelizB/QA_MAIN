import React from "react";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import { useLoaderData, redirect, Link } from "react-router-dom";
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
      <div className="contents card text-center">
        <div className="card-body">
          <div className="card-title ">
            <h5>Add New Users</h5>
          </div>
          <div className="card-text">
            Manage all users from a single platform
          </div>
          <div className="actions">
            <Link to={"/dashboard/register"} className="btn edit-btn">
              Add Users
            </Link>
            <Link to={"/dashboard/register"} className="btn edit-btn">
              Manage Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
