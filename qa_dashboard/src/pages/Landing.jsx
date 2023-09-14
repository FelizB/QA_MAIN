import React from "react";
import "../assets/styles/landing.css";
import front from "../assets/images/frontPic.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components/indexComponents";
const Landing = () => {
  return (
    <div className="container">
      <nav>
        <Logo />
      </nav>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-6">
            <h2>
              Welcome to <span>QA MASTER</span>
            </h2>
            <div className="LandButtons">
              <Link to="register" type="button" className="btn btn-primary">
                Register
              </Link>
              <Link to="login" type="button" className="btn btn-primary">
                Login
              </Link>
            </div>
          </div>
          <div className="col-6">
            <img src={front} alt="front pic" className="frontPic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
