import React from "react";
import "../assets/styles/components.css";

const StatItemUsers = ({ count, title, icon }) => {
  return (
    <div className="stats-item-users">
      <header className="item-header">
        <span className="item-count-users">{count}</span>
        <span className="item-icon-users">{icon}</span>
      </header>
      <h5 className="item-title">{title}</h5>
    </div>
  );
};
const StatItemTasks = ({ count, title, icon }) => {
  return (
    <div className="stats-item-tasks">
      <header className="item-header">
        <span className="item-count-tasks">{count}</span>
        <span className="item-icon-tasks">{icon}</span>
      </header>
      <h5 className="item-title">{title}</h5>
    </div>
  );
};

export { StatItemUsers, StatItemTasks };
