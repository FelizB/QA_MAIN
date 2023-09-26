import React from "react";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import UserTaskInfo from "../components/UserTaskInfo";
import { useLoaderData, useParams } from "react-router-dom";
import { Link, Form, useNavigation, redirect } from "react-router-dom";

export const deleteTaskLoader = async ({ params }) => {
  try {
    const { data } = await customFetch.get("/task/" + params.id);
    return data;
  } catch (error) {
    toast.error(error?.response?.data);
    return redirect("/dashboard/all-tasks");
  }
};
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
  const { task } = useLoaderData();
  return (
    <div>
      <button
        type="button"
        className="btn delete-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Delete
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                Remove
                <span> {task} </span> !!!!!!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="content-center">
                <span>
                  Start Date: <UserTaskInfo text={""} />
                </span>
                <span>
                  End Date: <UserTaskInfo text={""} />
                </span>
                <span>
                  Platforms: <UserTaskInfo text={""} />
                </span>
                <span>
                  Test Lead: <UserTaskInfo text={""} />
                </span>
                <span>
                  Task ID: <UserTaskInfo text={""} />
                </span>
                <span>
                  Product House: <UserTaskInfo text={""} />
                </span>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn edit-btn"
                data-bs-dismiss="modal"
              >
                Back
              </button>
              <Form method="post" action={"/dashboard/delete-task/" + "_id"}>
                <button
                  type="submit"
                  className="btn delete-btn"
                  data-bs-dismiss="modal"
                >
                  Delete
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
