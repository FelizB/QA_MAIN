import React from "react";
import {
  Link,
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customfetch";
import "../assets/styles/components.css";
import {
  TextInput,
  TextInput2,
  ViewText,
  PhoneInput,
} from "../components/FormInput";
import { SubmitButton } from "../components/indexComponents";
import { SelectRole, WorkStation } from "../components/SelectItems";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const profileAction = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("image size too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("User Updated successfully");
    return redirect("/dashboard/view-profile");
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
    Mobile_Number,
    Git,
    LinkedIn,
    Azure,
    PF_Number,
  } = user;
  const navigation = useNavigation();
  console.log(user);
  return (
    <div className="profile-page">
      <Form
        method="post"
        className="AddTasksForm"
        encType="multipart/form-data"
      >
        <Link to={"/dashboard/view-profile/"} className="">
          <KeyboardArrowLeftIcon />
        </Link>
        <div>
          <span>
            <h4 className="profile-title">Update Profile</h4>
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
            <ViewText name="First_Name" label="First Name" value={First_Name} />
          </div>
          <div className="col">
            <ViewText
              name="Second_Name"
              label="Second Name"
              value={Second_Name}
            />
          </div>
          <div className="col">
            <ViewText name="Last_Name" label="Last Name" value={Last_Name} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <ViewText name="Email" label="Email" value={Email} />
          </div>

          <div className="col">
            <WorkStation value={Station} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <PhoneInput
              id="phone"
              name="Phone_Number"
              label="Phone Number"
              length="12"
              value={Phone_Number}
            />
          </div>
          <div className="col">
            <PhoneInput
              id="Mobile"
              name="Mobile_Number"
              label="Mobile Number"
              length="12"
              value={Mobile_Number}
            />
          </div>
          <div className="col">
            <ViewText name="Role" label="Current Role" value={Role} />
          </div>

          <div className="col">
            <br />
            <SubmitButton type="submit" value="Update"></SubmitButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Profile;
