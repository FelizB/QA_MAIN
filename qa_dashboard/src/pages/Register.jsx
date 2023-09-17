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
import { WorkStation } from "../components/SelectItems";

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
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="container registerContainer">
      <Form method="post" className="form formRegister">
        <div className="log">
          <Logo className="logoItem" />
        </div>
        <h4>Register </h4>
        <TextInput name="First_Name" label="First Name" />
        <TextInput name="Second_Name" label="Second Name" />
        <TextInput name="Last_Name" label="Last Name" />
        <PhoneInput name="Phone_Number" label="Phone Number " />
        <WorkStation />
        <TextInput name="Role" label="Role" />
        <EmailInput />
        <PasswordInput />
        <SubmitButton value="Submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </SubmitButton>
        <div>
          <h6>
            Already a member?{" "}
            <span>
              <Link to="/login" className="link">
                Log in
              </Link>
            </span>
          </h6>
        </div>
      </Form>
    </div>
  );
};

export default Register;
