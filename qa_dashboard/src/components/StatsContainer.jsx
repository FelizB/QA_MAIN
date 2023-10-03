import React from "react";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import { useLoaderData, redirect } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { StatItemTasks } from "./StatItem";

function StatsContainer({ defaultStats }) {
  console.log(defaultStats);
  const stats = [
    {
      title: "Test Planning",
      count: defaultStats?.Test_Planning || 0,
      icon: <WorkIcon />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "Test Design",
      count: defaultStats?.Test_Design || 0,
      icon: <WorkIcon />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "Test Execution",
      count: defaultStats?.Test_Execution || 0,
      icon: <WorkIcon />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "Test Reporting",
      count: defaultStats?.Test_Reporting || 0,
      icon: <WorkIcon />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "Test Sign Off",
      count: defaultStats?.Test_SignOff || 0,
      icon: <WorkIcon />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "Pilot",
      count: defaultStats?.Pilot || 0,
      icon: <WorkIcon />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "Live",
      count: defaultStats?.Live || 0,
      icon: <WorkIcon />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
  ];
  return (
    <div className="stats-container2">
      {stats.map((item) => {
        return (
          <div>
            <StatItemTasks key={item.title} {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default StatsContainer;
