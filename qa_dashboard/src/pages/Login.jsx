import React from "react";
import {
  Link,
  Form,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import "../assets/styles/register.css";
import { Logo, LogInButton } from "../components/indexComponents";
import { PasswordInput, EmailInput } from "../components/FormInput";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";
import BackDroper from "../components/BackDroper";

export const LoginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.Password.length < 8) {
    errors.msg = "Password too short";
    return errors;
  }
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Welcome. We are loading your data");
    return redirect("/dashboard");
  } catch (error) {
    return error;
  }
};

const Login = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="container">
      <Form method="post" className="form formRegister">
        <div className="log">
          <Logo className="logoItem" />
        </div>
        <h5>Log in</h5>
        <div className="error-handler">
          {data && (
            <p style={{ color: "red" }}>
              {data?.response?.data}
              {data?.msg}
            </p>
          )}
        </div>

        <EmailInput label="Email" />
        <PasswordInput />
        <LogInButton value="Sign In" />

        <Link to="/dashboard" class="btn btn-primary" type="button">
          Explore page
        </Link>

        <div>
          <br />
        </div>
      </Form>
      {isPageLoading ? <BackDroper /> : ""}
    </div>
  );
};

export default Login;
