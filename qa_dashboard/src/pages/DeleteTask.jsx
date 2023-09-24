import React from "react";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const deleteTaskAction = async ({ params }) => {
  try {
    await customFetch.delete("/task/" + params.id);
    toast.success("Task Deleted successfully");
  } catch (error) {
    toast.error(error?.response?.data);
  }
  return redirect("/dashboard/all-tasks");
};

const DeleteTask = () => {
  return (
    <div>
      <h2>DeleteJob</h2>
    </div>
  );
};

export default DeleteTask;
