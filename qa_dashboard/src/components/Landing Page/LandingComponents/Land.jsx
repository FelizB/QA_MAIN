import React from "react";
import "./css/landing.css";
import "./css/venobox.css";
import { Link } from "react-router-dom";
import Rewarded from "../assets/images/completed.svg";
import LandImage from "../assets/images/header-image.svg";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const VenoBox = require("venobox");

function Land() {
  new VenoBox({
    selector: ".venobox",
  });
  return (
    <div>
      <div className="container">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="land-background-image">
          <img src={LandImage} alt="side cover" />
        </div>
        <div className="row align-items-center justify-content-center justify-content-lg-between">
          <div className="col-lg-6 col-md-10">
            <header className="header-hero-content row">
              <div className="">
                <h1 className="header-title">
                  Welcome to <span>QA</span> Master
                </h1>
              </div>
              <div className="row LandLinks">
                <div className="col">
                  <div className="LandButtons">
                    <Link
                      to="register"
                      type="button"
                      className="btn btn-primary"
                    >
                      Register
                    </Link>
                    <Link to="login" type="button" className="btn btn-primary">
                      Login
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <a
                    className="venobox round-circle-video"
                    data-vbtype="iframe"
                    href="https://www.youtube.com/embed/ecJB5ev1Jcw"
                  >
                    <PlayCircleFilledWhiteIcon class="btn btn-info rounded-circle" />
                  </a>
                </div>
              </div>
            </header>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="header-image">
              <img src={Rewarded} alt="rewarded person" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Land;
