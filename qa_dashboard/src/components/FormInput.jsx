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
        maxLength={prop.length}
        required
      />
    </div>
  );
};

const TextInput2 = (prop) => {
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
        maxLength={prop.length}
        defaultValue={prop.value}
      />
    </div>
  );
};
const PhoneInput = (prop) => {
  return (
    <div className="formInput">
      <label htmlFor={prop.label} className="form-label">
        {prop.label}
      </label>
      <input
        type="tel"
        id={prop.id}
        name={prop.name}
        label={prop.label}
        maxLength={prop.length}
        className="form-control"
        defaultValue={prop.value}
        required
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
        maxlength="25"
        defaultValue=""
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
      <input
        name="Email"
        type="email"
        class="form-control"
        id="emailInput"
        maxlength="30"
        defaultValue=""
      />
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

export {
  TextInput,
  TextInput2,
  PasswordInput,
  EmailInput,
  PhoneInput,
  ViewText,
};
