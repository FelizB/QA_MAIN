import React from "react";

const UserTaskInfo = ({ icon, text }) => {
  return (
    <div className="userTaskInfo">
      <span className="task-icon">{icon}</span>
      <span className="task-text">{text}</span>
    </div>
  );
};

export default UserTaskInfo;
