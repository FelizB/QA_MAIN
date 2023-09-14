import React from "react";
import "../assets/styles/register.css";

const TextInput = (prop) => {
  return (
    <div className="formInput">
      <label htmlFor={prop.name} className="form-label">
        {prop.name}
      </label>
      <input
        type="text"
        id={prop.name}
        name={prop.name}
        className="form-control"
      />
    </div>
  );
};

const PasswordInput = () => {
  return (
    <div className="formInput">
      <label for="Password" class="form-label">
        Password
      </label>
      <input type="password" id="Password" class="form-control"></input>
    </div>
  );
};
const EmailInput = () => {
  return (
    <div class="formInput">
      <label for="exampleFormControlInput1" class="form-label">
        Email address
      </label>
      <input type="email" class="form-control" id="emailInput" />
    </div>
  );
};

export { TextInput, PasswordInput, EmailInput };
