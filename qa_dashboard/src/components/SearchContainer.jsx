import React from "react";
import "../assets/styles/components.css";
import { Form, Link } from "react-router-dom";
import { useAllTasksContext } from "../pages/AllTasks";
import { TextInput2 } from "./FormInput";
import { SelectStatus, SortTasks } from "./SelectItems";
import SubmitButton from "./SubmitButton";
import { useDashboardContext } from "../pages/DashboardLayout";

const SearchContainer = () => {
  return (
    <div className="searchContainer taskContainer">
      <Form className="search-container-form">
        <div className="row">
          <div className="col">
            <TextInput2 name="search" label="Search" />
          </div>
          <div className="col">
            <TextInput2 name="ProjectName" label="Project Name" />
          </div>
          <div className="col">
            <SelectStatus />
          </div>
          <div className="col form-btn">
            <SubmitButton type="submit" value="Search" />
          </div>
          <div className="col form-Link">
            <Link to={"/dashboard/all-tasks/"} className="btn edit-btn">
              Reset
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SearchContainer;
