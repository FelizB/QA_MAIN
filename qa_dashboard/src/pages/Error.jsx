import React from "react";
import "../assets/styles/error.css";
import { Link, useRouteError } from "react-router-dom";
import error404 from "../assets/images/errorPage.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="container containerError">
        <img src={error404} alt="not found" className="error404" />
        <h3>Ooh! Page Not Found</h3>
        <Link to="/">Back Home</Link>
      </div>
    );
  } else {
    return (
      <div className="container containerError">
        <h3>Something Went Wrong. Please try again later!</h3>
        <h5>{error.status}</h5>
        <Link to="/">Back Home</Link>
      </div>
    );
  }
};

export default Error;
