import React from "react";
import "../assets/styles/components.css";
import WorkIcon from "@mui/icons-material/Work";

function ProductStats({ data }) {
  return (
    <div className="p-main-container">
      <div className="p-title">
        Progress Per <span>Product House</span>
      </div>
      <div className="p-main-cards">
        {data.map((value) => {
          return (
            <div className="p-card">
              <div className="p-card-inner">
                <h4>{value._id}</h4>
                <WorkIcon className="p-card_icon" />
              </div>
              <h2>{value.count}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductStats;
