import React from "react";
import "../Landing Page/LandingComponents/css/landing.css";
import Navbar from "../Landing Page/LandingComponents/navbar";
import Features from "../Landing Page/LandingComponents/Features";
import Land from "../Landing Page/LandingComponents/Land";
import About from "../Landing Page/LandingComponents/About";
import Testimonial from "../Landing Page/LandingComponents/Testimonial";
import Partners from "../Landing Page/LandingComponents/Partners";
import Footer from "../Landing Page/LandingComponents/footer";
import Faq from "../Landing Page/LandingComponents/Faq";
import Wrapper from "./LandingComponents/css/landing";

const LandingPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="landing-container" id="Land">
        <Land />
      </div>
      <div className="features-container" id="Features">
        <Features />
      </div>
      <div className="About-container" id="About">
        <About />
      </div>
      <div className="testimoninal-container" id="Testimonial">
        <Testimonial />
      </div>
      <div className="faq-contained" id="Faq">
        <Faq />
      </div>
      <div className="partners-container" id="Partners">
        <Partners />
      </div>
      <div className="footer-container" id="Footer">
        <Footer />
      </div>
    </Wrapper>
  );
};
export default LandingPage;
