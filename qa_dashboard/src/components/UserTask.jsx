import React from "react";
import UserTaskInfo from "./UserTaskInfo";
import { Link, Form, useNavigation, redirect } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
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
  return (
    <div className="userTask">
      <header>
        <div className="main-icon">{ProjectName.charAt(0)}</div>
        <div className="info">
          <h5>{ProjectName}</h5>
          <p>{ProductHouse}</p>
        </div>
      </header>
      <div className="contents">
        <div className="content-center">
          <UserTaskInfo icon={<PlaceIcon />} text={Subsidiary} />
          <UserTaskInfo icon={<WorkIcon />} text={Progress} />
          <UserTaskInfo icon={<DateRangeIcon />} text={EndDate} />
          <div className={"status" + Status}>{Status}</div>
        </div>
        <footer className="actions">
          <Link to={"/dashboard/edit-task/" + _id} className="btn edit-btn">
            Update
          </Link>
          <Form>
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
