import React from "react";
import "../assets/styles/components.css";

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <div className="stats-item" color={color} bcg={bcg}>
      <header className="item-header">
        <span className="item-count">{count}</span>
        <span className="item-icon">{icon}</span>
      </header>
      <h5 className="item-title">{title}</h5>
    </div>
  );
};

export default StatItem;
