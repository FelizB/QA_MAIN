import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Form } from "react-router-dom";
import { TaskInfo, customStyles } from "./AdminTaskInfo";
import DataTable, { createTheme } from "react-data-table-component";
import "../assets/styles/components.css";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { useAllTasksContext } from "../pages/AllTasks";

day.extend(advancedFormat);

const AdminTask = () => {
  const { data } = useAllTasksContext();
  const startDate = day(data.StartDate).format("MMM Do, YYYY");
  const endDate = day(data.EndDate).format("MMM Do, YYYY");
  data.endDate = endDate;
  data.StartDate = startDate;
  const { tasks } = data;
  const column = [
    {
      name: "TASK ID",
      width: "100px",
      center: true,
      selector: (row) => row.ID,
    },
    {
      name: "PROJECT NAME",
      width: "col col-lg-1",
      center: true,
      selector: (row) => row.ProjectName,
    },
    {
      name: "TEST LEAD",
      width: "col col-lg-1",
      center: true,
      selector: (row) => row.TestLead,
    },
    {
      name: "STATUS",
      width: "col col-lg-1",
      center: true,
      selector: (row) => row.Status,
    },
    {
      name: "PROGRESS",
      width: "100px",
      center: true,
      selector: (row) => row.Progress,
    },
    {
      name: "START DATE",
      width: "col col-lg-1",
      center: true,
      selector: (row) => row.StartDate,
    },
    {
      name: "ACTIONS",
      width: "col col-lg-1",
      center: true,
      cell: (row) => <MoreVertIcon size="small" row={row} />,
      allowOverflow: true,
      button: true,
    },
  ];

  if (tasks.length === 0) {
    return (
      <div className="taskContainer">
        <h6>No Tasks to display</h6>
      </div>
    );
  }

  return (
    <div>
      <DataTable
        className="table task-table"
        columns={column}
        data={tasks}
        pagination
        fixedHeader
        customStyles={customStyles}
        pointerOnHover
        highlightOnHover
        theme="solarized"
      ></DataTable>
    </div>
  );
};

export default AdminTask;
