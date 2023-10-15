import React from "react";
import "../assets/styles/register.css";
import { Form, useNavigation, redirect } from "react-router-dom";
import { SubmitButton } from "../components/indexComponents";
import {
  TextInput,
  TextInput2,
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
    toast.success("User added to pool of QA users");
    return redirect("/dashboard/admin");
  } catch (error) {
    toast.error(error?.response?.data);
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation();
  return (
    <div className="container registerContainer">
      <Form method="post" className="register-form">
        <div>
          <h4>
            Add <span>Users </span>
          </h4>
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
          <div className="col">
            <TextInput name="PF_Number" label="PF Number" length="5" />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <EmailInput />
          </div>
          <div className="col">
            <PhoneInput
              id="phone"
              name="Phone_Number"
              label="Phone Number"
              length="12"
            />
          </div>
          <div className="col">
            <PhoneInput
              name="Mobile_Number"
              label="Mobile Number"
              length="12"
              id="Mobile"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <SelectRole />
          </div>
          <div className="col">
            <WorkStation />
          </div>
          <div className="col">
            <PasswordInput />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <TextInput name="LinkedIn" label="Linked In profile" />
          </div>
          <div className="col">
            <TextInput name="Git" label="Github Profile" />
          </div>
          <div className="col">
            <TextInput2 name="Azure" label="Azure Board" />
          </div>
          <div className="col">
            <br />
            <SubmitButton value=" + Add " />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Register;
