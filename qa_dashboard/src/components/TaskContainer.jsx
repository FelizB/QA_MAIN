import React from "react";
import AdminTaskView from "../pages/adminTaskView";
import "../assets/styles/components.css";
import { useDashboardContext } from "../pages/DashboardLayout";
import UserTaskContainer from "./UserTaskContainer";

const TaskContainer = () => {
  const { user } = useDashboardContext();
  if (user.Role === "Admin") {
    return (
      <div className="taskContainer">
        <div className="text-center">
          <AdminTaskView />
        </div>
      </div>
    );
  }
  return <UserTaskContainer />;
};

export default TaskContainer;
