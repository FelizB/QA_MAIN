import React from "react";
import "../assets/styles/components.css";
import UserTask from "./UserTask";
import "../assets/styles/components.css";
import { useAllTasksContext } from "../pages/AllTasks";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const UserTaskContainer = () => {
  const { data } = useAllTasksContext();
  const startDate = day(data.StartDate).format("MMM Do, YYYY");
  const endDate = day(data.EndDate).format("MMM Do, YYYY");
  data.endDate = endDate;
  data.StartDate = startDate;
  const { tasks } = data;
  if (tasks.length === 1) {
    return (
      <div className="taskContainer">
        <h6>No Tasks to display</h6>
      </div>
    );
  }
  return (
    <div className="taskContainer">
      <div className="">
        <div className="tasks">
          {tasks.map((task) => {
            return <UserTask key={task.ID} {...task} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserTaskContainer;
