import React from "react";
import "../assets/styles/components.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";

function ProductStats() {
  const ProductHouses = [
    { name: "Digitization", value: 10 },
    { name: "Omni", value: 4 },
    { name: "USSD", value: 8 },
  ];
  return (
    <div className="p-main-container">
      <div className="p-main-title"></div>
      <div className=".p-main-cards">
        {ProductHouses.map((value) => {
          return (
            <div className="p-card">
              <div className="p-card-inner">
                <h3>{value.name}</h3>
                <WorkIcon className="p-card_icon" />
              </div>
              <h1>{value.value}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductStats;
