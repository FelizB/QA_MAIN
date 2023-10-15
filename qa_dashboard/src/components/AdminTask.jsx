import React, { useState, EseEffect, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { customStyles } from "./AdminTaskInfo";
import DataTable from "react-data-table-component";
import "../assets/styles/components.css";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customFetch from "../utils/customfetch";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
day.extend(advancedFormat);

const AdminTask = ({ request }) => {
  const [data, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  let params;
  if (request) {
    const item = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    params = item;
  }

  useEffect(() => {
    customFetch
      .get("/task", { params })
      .then((response) => setRecords(response.data))
      .catch((err) => console.log(err));
  }, []);

  //const { data } = useAllTasksContext();

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
      name: "DELETE",
      width: "col col-lg-1",
      center: true,
      cell: (row) => {
        return (
          <div className="ActionIconContainer">
            <MoveToInboxIcon size="small" className="actionIcon" row={row} />
          </div>
        );
      },
      allowOverflow: true,
      button: true,
    },
    {
      name: "ACTIONS",
      width: "col col-lg-1",
      center: true,
      cell: (row) => {
        return (
          <div className="ActionIconContainer1">
            <h7 className="actionIcon1" row={row}>
              Details
            </h7>
          </div>
        );
      },
      allowOverflow: true,
      button: true,
    },
  ];

  if (!tasks) {
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
        actions={
          <div>
            <btn className="export btn btn-success ">Export Pdf</btn>
          </div>
        }
        subHeader
        subHeaderComponent={
          <div>
            Count: <span>{tasks.length}</span>
          </div>
        }
        subHeaderAlign="left"
      ></DataTable>
    </div>
  );
};

export default AdminTask;
