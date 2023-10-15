import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { text: "Dashboard", path: ".", icon: <IoBarChartSharp /> },
  { text: "Products", path: "product-houses", icon: <FaWpforms /> },
];
const manual = [
  { text: "Manual", path: "automation", icon: "" },
  { text: "View Tasks", path: "all-tasks", icon: "" },
  { text: "Add Task", path: "add-task", icon: "" },
];
const automation = [
  { text: "Automation", path: "automation", icon: "" },
  { text: "Admin", path: "admin", icon: "" },
];
const admin = [{ text: "Admin", path: "admin", icon: "" }];
const profile = [
  { text: "Profile", path: "view-profile", icon: <ImProfile /> },
];

export { links, manual, automation, admin, profile };
