import React from "react";
import { Task } from "../components/indexComponents";
import "../assets/styles/components.css";
import { useAllTasksContext } from "../pages/AllTasks";

const TaskContainer = () => {
  const { data } = useAllTasksContext();
  const { tasks } = data;
  if (tasks.length === 0) {
    return (
      <div className="taskContainer">
        <h6>No Tasks to display</h6>
      </div>
    );
  }
  return (
    <div className="taskContainer">
      {tasks.map((task) => {
        return <Task key={task._id} {...task} />;
      })}
    </div>
  );
};

export default TaskContainer;
