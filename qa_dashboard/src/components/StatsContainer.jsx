import React from "react";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import { useLoaderData, redirect } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { StatItemTasks } from "./StatItem";
import PieChartComponent from "./PieChartComponent";
import ProductStats from "./ProductStats";

function StatsContainer({ defaultStats }) {
  const stats = {
    Test_Planning: defaultStats?.Test_Planning || 0,
    Test_Design: defaultStats?.Test_Design || 0,
    Test_Execution: defaultStats?.Test_Execution || 0,
    Test_Reporting: defaultStats?.Test_Reporting || 0,
    Test_Sign_Off: defaultStats?.Test_SignOff || 0,
    Pilot: defaultStats?.Pilot || 0,
    Live: defaultStats?.Live || 0,
  };
  return (
    <div className="stats-container2">
      <div className="">
        <div className=" ">
          <ProductStats data={stats} />
        </div>
      </div>
    </div>
  );
}

export default StatsContainer;
