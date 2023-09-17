import React from "react";
import {
  Link,
  Form,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import "../assets/styles/register.css";
import { Logo, SubmitButton } from "../components/indexComponents";
import { PasswordInput, EmailInput } from "../components/FormInput";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.Password.length < 8) {
    errors.msg = "Password too short";
    return errors;
  }
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data);
    console.log(error);
    return error;
  }
};

const Login = () => {
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="registerContainer">
      <Form method="post" className="form formRegister">
        <div className="log">
          <Logo className="logoItem" />
        </div>
        <h5>Log in</h5>
        {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>}
        <EmailInput label="Email" />
        <PasswordInput />
        <SubmitButton value="Submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </SubmitButton>

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
      </Form>
    </div>
  );
};

export default Login;
