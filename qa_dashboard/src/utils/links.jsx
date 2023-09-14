import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { text: "Stats", path: ".", icon: <IoBarChartSharp /> },
  { text: "Admin", path: "admin", icon: <MdAdminPanelSettings /> },
  { text: "All job", path: "all-jobs", icon: <MdQueryStats /> },
  { text: "Add job", path: "add-jobs", icon: <FaWpforms /> },
  { text: "Profile", path: "profile", icon: <ImProfile /> },
];

export default links;
