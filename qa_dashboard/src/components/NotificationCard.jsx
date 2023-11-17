import React from "react";
import "../assets/styles/dashLayout.css";
import ClearIcon from "@mui/icons-material/Clear";

const NotificationCard = (props) => {
  return (
    <div className="not-card">
      <div className="card notification-main-card">
        <div className="card-body notification-card-body">
          <p className="notification-card-text">{props.message}</p>
        </div>
        <div className="card-body not-delete">
          <ClearIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
