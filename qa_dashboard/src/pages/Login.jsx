import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/register.css";
import { Logo, SubmitButton } from "../components/indexComponents";
import { TextInput, PasswordInput } from "../components/FormInput";

const Login = () => {
  return (
    <div className="container registerContainer">
      <form className="form formRegister">
        <div className="log">
          <Logo className="logoItem" />
        </div>
        <h5>Log in</h5>
        <TextInput name="Username" />
        <PasswordInput />
        <SubmitButton value="Submit" />

        <Link to="/dashboard" class="btn btn-primary" type="button">
          Explore page
        </Link>

        <div>
          <h6>
            Not a member?
            <span>
              <Link to="/register" className="link">
                Register
              </Link>
            </span>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
