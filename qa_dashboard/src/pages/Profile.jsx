import React from "react";
import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customfetch";
import "../assets/styles/components.css";
import { useDashboardContext } from "./DashboardLayout";
import { TextInput } from "../components/FormInput";
import { SubmitButton } from "../components/indexComponents";
import { SelectRole, WorkStation } from "../components/SelectItems";

export const profileAction = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  console.log(file);
  if (file && file.size > 500000) {
    toast.error("image size too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("User Updated successfully");
  } catch (error) {
    toast.error(error?.response?.data);
  }
  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const {
    _id,
    First_Name,
    Second_Name,
    Last_Name,
    Email,
    Station,
    Role,
    Phone_Number,
  } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="profile-page">
      <Form
        method="post"
        className="AddTasksForm"
        encType="multipart/form-data"
      >
        <div>
          <span>
            <h4 className="profile-title">Profile</h4>
            <br />
          </span>
        </div>
        <div className="form-row">
          <label htmlFor="avatar" className="form-label">
            Select an image file (max 0.5 MB)
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="form-input form-control"
            accept="image/*"
          />
        </div>
        <br />
        <div className="row">
          <div className="col">
            <TextInput
              name="First_Name"
              label="First Name"
              value={First_Name}
            />
          </div>
          <div className="col">
            <TextInput
              name="Second_Name"
              label="Second Name"
              value={Second_Name}
            />
          </div>
          <div className="col">
            <TextInput name="Last_Name" label="Last Name" value={Last_Name} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <TextInput name="Email" label="Email" value={Email} />
          </div>

          <div className="col">
            <WorkStation value={Station} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <TextInput
              name="Phone_Number"
              label="Phone Number"
              value={Phone_Number}
            />
          </div>
          <div className="col">
            <SelectRole value={Role} />
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

export default Profile;
