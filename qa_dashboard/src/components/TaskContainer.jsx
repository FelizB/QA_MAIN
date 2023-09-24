import React from "react";
import AdminTask from "./AdminTask";
import "../assets/styles/components.css";
import { useDashboardContext } from "../pages/DashboardLayout";
import UserTaskContainer from "./UserTaskContainer";
const TaskContainer = () => {
  const { user } = useDashboardContext();
  if (user.Role === "User") {
    return (
      <div className="taskContainer">
        <div className="text-center">
          <AdminTask />
        </div>
      </div>
    );
  }
  return <UserTaskContainer />;
};

export default TaskContainer;
