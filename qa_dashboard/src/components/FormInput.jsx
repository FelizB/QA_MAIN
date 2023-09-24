import React from "react";
import "../assets/styles/register.css";

const TextInput = (prop) => {
  return (
    <div className="formInput">
      <label htmlFor={prop.label} className="form-label">
        {prop.label}
      </label>
      <input
        type="text"
        id={prop.name}
        name={prop.name}
        label={prop.label}
        className="form-control"
        defaultValue={prop.value}
      />
    </div>
  );
};
const PhoneInput = (prop) => {
  return (
    <div className="formInput">
      <label htmlFor="Phone Number" className="form-label">
        Phone Number
      </label>
      <input
        type="tel"
        id="Phone"
        name={prop.name}
        label="Phone Number"
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
      <input
        name="Password"
        type="password"
        id="Password"
        class="form-control"
        required
      ></input>
    </div>
  );
};
const EmailInput = () => {
  return (
    <div class="formInput">
      <label for="exampleFormControlInput1" class="form-label">
        Email address
      </label>
      <input name="Email" type="email" class="form-control" id="emailInput" />
    </div>
  );
};
const ViewText = (prop) => {
  return (
    <div className="formInput">
      <label htmlFor={prop.label} className="form-label">
        {prop.label}
      </label>
      <input
        type="text"
        id={prop.name}
        name={prop.name}
        label={prop.label}
        className="form-control"
        value={prop.value}
        readOnly
      />
    </div>
  );
};

export { TextInput, PasswordInput, EmailInput, PhoneInput, ViewText };
