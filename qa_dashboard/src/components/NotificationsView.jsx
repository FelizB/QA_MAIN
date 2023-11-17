import React, { useState } from "react";
import "../assets/styles/dashLayout.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NotificationCard from "./NotificationCard";

const testData = [
  {
    title: "Todays Quote",
    message: "Test is all you have got",
  },
  {
    title: "Tomorrows Quote",
    message: "Test is all you have got is in your heart",
  },
  {
    title: "Day after Quote",
    message: "Not all you see in in you Test is all you have got",
  },
];

const NotificationsView = () => {
  const [notificationCount, setNotificationCount] = useState(testData.length);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="notifications-icon">
        <NotificationsActiveIcon
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <span className="notifications-label">{notificationCount}</span>
      </div>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="notification-basic-menu">
            {testData.map((data) => {
              return (
                <MenuItem autoFocus={false} className="MenuItem">
                  <div className="notification-card">
                    <NotificationCard
                      title={data.title}
                      message={data.message}
                    />
                  </div>
                </MenuItem>
              );
            })}
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default NotificationsView;
