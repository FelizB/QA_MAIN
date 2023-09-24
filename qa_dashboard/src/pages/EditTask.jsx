import { React, useContext, createContext } from "react";
import { toast } from "react-toastify";
import { TaskContainer, SearchContainer } from "../components/indexComponents";
import customFetch from "../utils/customfetch";
import { useLoaderData, useParams } from "react-router-dom";
import { Form, useNavigation, redirect } from "react-router-dom";
import "../assets/styles/components.css";
import { TextInput } from "../components/FormInput";
import { SubmitButton } from "../components/indexComponents";
import {
  AffectedPlatforms,
  DatePicker,
  SelectSubsidiary,
  SelectStatus,
  ShowProgress,
} from "../components/SelectItems";

export const editTaskLoader = async ({ params }) => {
  try {
    const { data } = await customFetch.get("/task/" + params.id);
    return data;
  } catch (error) {
    toast.error(error?.response?.data);
    return redirect("/dashboard/all-tasks");
  }
};
export const editTaskAction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch("/task/" + params.id, data);
    toast.success("Task edited successfully");
    return redirect("/dashboard/all-tasks");
  } catch (error) {
    toast.error(error?.response?.data);
    return error;
  }
};

const EditTask = () => {
  const { task } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(task.StartDate, task.EndDate);
  return (
    <div className="editTask container">
      <Form method="post" className="form">
        <h4 className="form-title">Update {task.ProjectName}</h4>
        <div className="row">
          <div className="col">
            <TextInput
              name="ProjectName"
              label="Project Name"
              value={task.ProjectName}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <TextInput
              name="TestLead"
              label="Test Lead"
              value={task.TestLead}
            />
          </div>
          <div className="col">
            <SelectStatus value={task.Status} />
          </div>
          <div className="col">
            <ShowProgress value={task.Progress} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <DatePicker name="StartDate" label="Expected Start Date" />
          </div>
          <div className="col">
            <DatePicker name="EndDate" label="Expected Completion Date" />
          </div>
          <div className="col">
            <br />
            <SubmitButton type="submit" value="Submit" disabled={isSubmitting}>
              {isSubmitting ? "submitting..." : "submit"}
            </SubmitButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditTask;
