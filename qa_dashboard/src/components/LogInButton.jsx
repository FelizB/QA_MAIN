import React from "react";
import "../assets/styles/register.css";
import { useNavigation } from "react-router-dom";

const LogInButton = (prop) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div class="d-grid submitBtn">
      <button
        type="submit"
        class="btn submit-btn"
        value={prop.value}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : prop.value}
      </button>
    </div>
  );
};

export default LogInButton;
