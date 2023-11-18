import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h4>Somthing went wrong..</h4>
      <p>
        Please try reloading page and if the error persists contact system
        administrator
      </p>
    </div>
  );
};

export default ErrorElement;
