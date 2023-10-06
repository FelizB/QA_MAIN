import React from "react";
import "../assets/styles/components.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import { useAllTasksContext } from "../pages/AllTasks";

function ProductStats({ data }) {
  console.log(data);
  const ProductHouses = [
    { name: "Digitization", value: 10 },
    { name: "Omni", value: 4 },
    { name: "Payments", value: 8 },
    { name: "Borrow", value: 8 },
    { name: "Infrastructure", value: 8 },
    { name: "Save-Invest", value: 8 },
    { name: "Finserve", value: 8 },
    { name: "Compliance", value: 8 },
    { name: "Fin-Telco", value: 8 },
  ];
  return (
    <div className="p-main-container">
      <div className="p-title">
        Progress Per <span>Product House</span>
      </div>
      <div className="p-main-cards">
        {ProductHouses.map((value) => {
          return (
            <div className="p-card">
              <div className="p-card-inner">
                <h4>{value.name}</h4>
                <WorkIcon className="p-card_icon" />
              </div>
              <h2>{value.value}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductStats;
