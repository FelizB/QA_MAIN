import React from "react";
import "../assets/styles/register.css";

const SubmitButton = (props) => {
  return (
    <div class="d-grid submitBtn">
      <input type="submit" class="btn submit-btn" value={props.value} />
    </div>
  );
};

export default SubmitButton;
