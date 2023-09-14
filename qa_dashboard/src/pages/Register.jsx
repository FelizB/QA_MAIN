import React from "react";
import "../assets/styles/register.css";
import { Link } from "react-router-dom";
import { Logo, SubmitButton } from "../components/indexComponents";
import { TextInput, PasswordInput, EmailInput } from "../components/FormInput";

const Register = () => {
  return (
    <div className="container registerContainer">
      <form className="form formRegister">
        <div className="log">
          <Logo className="logoItem" />
        </div>
        <h4>Register </h4>
        <TextInput name="First Name" />
        <TextInput name="Last Name" />
        <TextInput name="Organization" />
        <EmailInput />
        <PasswordInput />
        <SubmitButton value="Submit" />
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
      </form>
    </div>
  );
};

export default Register;
