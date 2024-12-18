import React from "react";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customfetch";
import "../assets/styles/components.css";
import { useDashboardContext } from "./DashboardLayout";
import { TextInput } from "../components/FormInput";
import { SubmitButton } from "../components/indexComponents";
import {
  AffectedPlatforms,
  DatePicker,
  SelectSubsidiary,
  SelectStatus,
  ShowProgress,
  ProductHouses,
} from "../components/SelectItems";

export const addTaskAction = async ({ request }) => {
  let subsidiariesData = [];
  var subsidiaries = document.getElementsByName("Subsidiary");
  for (var i = 0; i < subsidiaries.length; i++) {
    if (subsidiaries[i].checked === true) {
      subsidiariesData.push(subsidiaries[i].value);
    }
  }

  const formData = await request.formData();
  var data = Object.fromEntries(formData);

  data.Subsidiary = subsidiariesData;
  console.log(data);

  try {
    await customFetch.post("/task", data);
    document.getElementById("addForm").reset();
    toast.success("Task submitted Successful");
    return null;
  } catch (error) {
    toast.error(error?.response?.data);
    return error;
  }
};

const AddTask = () => {
  const { user } = useDashboardContext;
  const navigation = useNavigation();

  return (
    <div className="add-task-container">
      <Form method="post" id="addForm" className="AddTasksForm">
        <h5>
          <span>Create new Tasks</span>
        </h5>
        <div className="row">
          <div className="col">
            <ProductHouses name="ProductHouse" label="Product House" />
          </div>
          <div className="col">
            <TextInput name="ProjectName" label="Project Name" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <SelectSubsidiary />
          </div>
          <div className="col">
            <AffectedPlatforms />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <TextInput name="TestLead" label="Test Lead" />
          </div>
          <div className="col">
            <SelectStatus />
          </div>
          <div className="col">
            <ShowProgress />
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
            <SubmitButton type="submit" value="Submit"></SubmitButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
