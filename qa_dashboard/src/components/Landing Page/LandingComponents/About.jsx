import React from "react";
import Background1 from "../assets/images/background1.jpg";
import Background2 from "../assets/images/background2.jpg";
import Background3 from "../assets/images/background3.jpg";
import Background4 from "../assets/images/background4.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {
  return (
    <div className="container">
      <div className="about-title">
        <h1>
          <strong>
            What is QA Master <span>all about?</span>
          </strong>
        </h1>
        <p>
          Our services are meant to make difference in organizations by <br />
          <strong>
            Transforming relationships and making the work environment feel more
            rewarding
          </strong>
        </p>
        <div className="social">
          <a href="https://github.com/FelizB/referral_system">Learn More</a>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/felix-bosire-679b93116/">
                <LinkedInIcon className="icons" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/FelantezBuzz">
                <TwitterIcon className="icons" />
              </a>
            </li>
            <li>
              <a href="https://github.com/FelizB">
                <GitHubIcon className="icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div class="media">
        <img
          class="align-self-center mr-3 media-image"
          src={Background1}
          alt="Generic placeholder"
        />
        <div class="media-body">
          <h3 class="mt-0">Our History</h3>
          <p>
            While still doing internship. I realised how much the administration
            was trying hard to promote team work among employees. They would
            speak about it on meetings and even promise to reward those who had
            the set target for customer referrals to other colleagues
            considering they were dealing with different products and services.
            This inspred me to make this web app to support the administration
            in that task
          </p>
        </div>
      </div>
      <br />
      <div class="media">
        <div class="media-body">
          <h3 class="mt-0">Our Purpose</h3>
          <p>Transforming work spaces and making improving employees morales</p>
          <p class="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
        <img
          class="align-self-center mr-3 media-image"
          src={Background2}
          alt="Generic placeholder"
        />
      </div>
      <br />
      <div class="media">
        <img
          class="align-self-center mr-3 media-image"
          src={Background3}
          alt="Generic placeholder"
        />
        <div class="media-body">
          <h3 class="mt-0">Mission Statement</h3>
          <p>
            We offer integrated financial services that socially and
            economically empower consumers, businesses and communities.
          </p>
          <p class="mb-0">
            <strong>Tagline:</strong>
            Your Listening, Caring Partner.
          </p>
        </div>
      </div>
      <br />
      <div class="media">
        <div class="media-body">
          <h3 class="mt-0">Our Core Values</h3>
          <p>
            Our values are intrinsically weaved into our business, flowing
            through every aspect of our day to day and embracing it as our
            culture. They are reflections of what we believe in and as guiding
            principles provide a standard through which we measure ourselves.
          </p>
        </div>
        <img
          class="align-self-center mr-3 media-image"
          src={Background4}
          alt="Generic placeholder"
        />
      </div>
    </div>
  );
}
export default About;
