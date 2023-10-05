import React from "react";
import Rewarded from "../assets/images/completed.svg";
import QuoteLeft from "../assets/icons/quote-left.svg";
import QuoteRight from "../assets/icons/quote-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./css/testimonial.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Testimonial() {
  return (
    <div className="container">
      <div className="grid-title"></div>
      <div>
        <h1>
          <strong>
            What our <span>clients say:</span>
          </strong>
        </h1>
        <p>
          Reward your staff with the best feature in the market
          <strong> Make them feel satisfied with their work</strong>
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        loop={false}
        pagination={true}
        navigation={false}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <div>
            <div className="testimonialBox">
              <img src={QuoteLeft} className="quote" alt="quote tags" />
              <div className="content">
                <p>
                  I am satisfied with the simplicity of the application. I was
                  able to award the my best employees
                </p>
              </div>
              <img src={QuoteRight} className="quote2" alt="quote tags" />
              <div className="details">
                <div className="imgBx">
                  <img src={Rewarded} alt="Get rewarded" />
                </div>
                <h3>
                  Felix Bosire <br />
                  <span>Creative Designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <div className="testimonialBox">
              <img src={QuoteLeft} className="quote" alt="quote tags" />
              <div className="content">
                <p>
                  Wow, such a nice platform. As a staff, I enjoy helping my
                  colleagues because together weremake it happen
                </p>
              </div>
              <img src={QuoteRight} className="quote2" alt="quote tags" />
              <div className="details">
                <div className="imgBx">
                  <img src={Rewarded} alt="Get rewarded" />
                </div>
                <h3>
                  Felister Kyalo <br />
                  <span>Relationship Officer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <div className="testimonialBox">
              <img src={QuoteLeft} className="quote" alt="quote tags" />
              <div className="content">
                <p>
                  My staff are well motivated and eager to be awarded soon.
                  Thanks to this platform
                </p>
              </div>
              <img src={QuoteRight} className="quote2" alt="quote tags" />
              <div className="details">
                <div className="imgBx">
                  <img src={Rewarded} alt="Get rewarded" />
                </div>
                <h3>
                  Kelvin Peterson <br />
                  <span>Banker</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <div className="testimonialBox">
              <img src={QuoteLeft} className="quote" alt="quote tags" />
              <div className="content">
                <p>
                  My company has grown since I enrolled my staff to this
                  platform. I cant wait to selectorwho gets the reward this
                  time.
                </p>
              </div>
              <img src={QuoteRight} className="quote2" alt="quote tags" />
              <div className="details">
                <div className="imgBx">
                  <img src={Rewarded} alt="Get rewarded" />
                </div>
                <h3>
                  Alvin Kenchap <br />
                  <span>Food Store Owner</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Testimonial;
