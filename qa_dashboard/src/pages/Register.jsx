import React from "react";
import "../assets/styles/register.css";
import { Link, Form, useNavigation, redirect } from "react-router-dom";
import { Logo, SubmitButton } from "../components/indexComponents";
import {
  TextInput,
  PasswordInput,
  EmailInput,
  PhoneInput,
} from "../components/FormInput";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import { WorkStation, SelectRole } from "../components/SelectItems";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Successful. Please log in");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data);
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation();
  return (
    <div className="container registerContainer">
      <Form method="post" className="">
        <div>
          <h4>Register </h4>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <TextInput name="First_Name" label="First Name" />
          </div>
          <div className="col">
            <TextInput name="Second_Name" label="Second Name" />
          </div>
          <div className="col">
            <TextInput name="Last_Name" label="Last Name" />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <EmailInput />
          </div>
          <div className="col">
            <PhoneInput name="Phone_Number" label="Phone Number " />
          </div>
          <div className="col">
            <WorkStation />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <SelectRole />
          </div>

          <div className="col">
            <PasswordInput />
          </div>
          <div className="col">
            <SubmitButton value="Add Member" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Register;
