import React from "react";
import "../assets/styles/register.css";
import { useNavigation } from "react-router-dom";

const SubmitButton = (props) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div class="d-grid submitBtn">
      <button
        type="submit"
        class="btn submit-btn"
        value={props.value}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting..." : "submit"}
      </button>
    </div>
  );
};

export default SubmitButton;
