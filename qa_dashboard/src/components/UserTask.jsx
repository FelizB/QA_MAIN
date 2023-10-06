import { React, useState, useContext, createContext } from "react";
import UserTaskInfo from "./UserTaskInfo";
import { Link, Form, useNavigation, redirect } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import { toast } from "react-toastify";
import customFetch from "../utils/customfetch";
import DeleteTask from "../pages/DeleteTask";

const UserTask = ({
  _id,
  ID,
  ProjectName,
  ProductHouse,
  Subsidiary,
  Platforms,
  TestLead,
  Progress,
  Status,
  StartDate,
  EndDate,
}) => {
  let status = "";
  if (Status === "Not Started") {
    status = "not-started";
  } else if (Status === "Test Planning") {
    status = "test-planning";
  } else if (Status === "Test Design") {
    status = "test-design";
  } else if (Status === "Test Execution") {
    status = "test-execution";
  } else if (Status === "Test Reporting") {
    status = "test-reporting";
  } else if (Status === "Test SignOff") {
    status = "sign-off";
  } else if (Status === "Pilot") {
    status = "pilot";
  } else if (Status === "Live") {
    status = "live";
  }

  return (
    <div className="userTask">
      <header>
        <div className="main-icon">{ProjectName.charAt(0)}</div>
        <div className="info">
          <h6>{ProjectName}</h6>
          <p>{ProductHouse}</p>
        </div>
      </header>
      <div className="contents">
        <div className="content-center">
          <UserTaskInfo icon={<PlaceIcon />} text={Subsidiary} />
          <UserTaskInfo icon={<WorkIcon />} text={Progress} />
          <UserTaskInfo icon={<DateRangeIcon />} text={EndDate} />
          <div>
            <button className={status}>{Status}</button>
          </div>
        </div>
        <footer className="actions">
          <Link to={"/dashboard/edit-task/" + _id} className="btn edit-btn">
            Update
          </Link>
          <Form method="post" action={"/dashboard/delete-task/" + _id}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </div>
  );
};
export default UserTask;
