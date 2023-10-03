import React from "react";

import "../assets/styles/components.css";
import { Form, Link } from "react-router-dom";
import { useAllTasksContext } from "../pages/AllTasks";
import { TextInput } from "./FormInput";
import { SelectStatus, SortTasks } from "./SelectItems";
import SubmitButton from "./SubmitButton";

const SearchContainer = () => {
  return (
    <div className="searchContainer taskContainer">
      <Form>
        <h5 className="form-title">Search Form</h5>
        <div className="row">
          <div className="col">
            <TextInput name="search" label="Search" />
          </div>
          <div className="col">
            <TextInput name="ProjectName" label="Project Name" />
          </div>
          <div className="col">
            <SelectStatus />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <SortTasks />
          </div>
          <div className="col">
            <br />
            <br />
            <Link to={"/dashboard/all-tasks/"} className="btn edit-btn">
              Reset Search Values
            </Link>
          </div>
          <div className="col">
            <Form method="post" action={"/dashboard/delete-task/"}>
              <SubmitButton
                type="submit"
                className="btn edit-btn"
                value="Submit"
              />
            </Form>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SearchContainer;
