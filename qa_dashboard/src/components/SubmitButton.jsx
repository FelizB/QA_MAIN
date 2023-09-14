import React from "react";
import "../assets/styles/register.css";

const SubmitButton = (props) => {
  return (
    <div class="d-grid submitBtn">
      <input type="submit" class="btn btn-primary" value={props.value} />
    </div>
  );
};

export default SubmitButton;
