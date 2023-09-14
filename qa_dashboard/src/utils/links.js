import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { text: "Stats", path: ".", icon: <IoBarChartSharp /> },
  { text: "Products", path: "product-houses", icon: <FaWpforms /> },
  { text: "All Tasks", path: "all-tasks", icon: <MdQueryStats /> },
  { text: "Add Task", path: "add-task", icon: <FaWpforms /> },
  { text: "Admin", path: "admin", icon: <MdAdminPanelSettings /> },
  { text: "Profile", path: "profile", icon: <ImProfile /> },
];

export default links;
