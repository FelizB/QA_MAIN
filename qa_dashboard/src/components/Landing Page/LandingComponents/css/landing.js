import styled from "styled-components";

const Wrapper = styled.div`
  .body {
    display: block;
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
  .container-footer .container {
    min-height: 55vh;
  }
  .landing-container {
    min-height: 100vh !important;
  }
  .features-container {
    background-color: #fff;
  }
  .land-container {
    background-color: #fff;
  }
  .rounded-circle {
    position: relative;
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 15px;
    margin-left: 2rem;
    color: #fff;
  }
  .rounded-circle::before {
    position: absolute;
    content: "me";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: rgba(151, 51, 32, 0.8);
    z-index: -9;
    animation: video 2s linear infinite;
  }
  .rounded-circle:hover {
    color: #df8611;
  }
  .testimoninal-container {
    background-color: #fff;
  }
  .faq-container {
    background-color: #fff;
  }
  .footer-container {
    background-color: #fff;
  }

  .navbar {
    min-width: 100%;
    max-height: 10vh;
    background-color: transparent !important;
    position: sticky;
    top: 0;
    z-index: 4;
  }

  .navbar-scroll {
    background: #fff;
  }
  .navbar-brand {
    font-size: 2rem;
    font-weight: bold;
    padding-inline: 1rem;
  }
  .navbar-brand span {
    color: #973320;
    font-weight: bolder;
    font-size: 3rem;
  }
  .nav-items-container {
    padding: 2px;
  }
  .nav-items-container ul {
    display: flex;
    list-style-type: none;
  }
  .nav-items-container li a {
    text-decoration: none;
    font-size: 16px;
    color: #141414;
    font-weight: 500;
  }
  .nav-items-container li a:hover {
    color: chocolate;
  }
  .nav-items {
    margin-right: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    font-weight: lighter;
    margin-top: 10px;
    padding: 10px;
  }
  .nav-button {
    margin-right: 2rem;
    border-radius: 25px;
    background-color: #973320;
    border: #973320;
    margin-top: 8px;
    color: white;
    font-size: 0.9rem;
    padding: 10px;
    width: 5rem;
  }
  .land-background-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
  }
  .land-background-image img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .features-Section h1 {
    font-size: 42px;
    font-weight: 700;
    color: #38424d;
  }
  .features-Section img {
    height: 500px;
    width: 400px;
  }
  .header-hero-content h1 {
    font-weight: 2000;
  }
  .header-hero-content {
    padding-top: 20%;
    font-weight: bold;
  }
  .text span {
    color: #973320;
  }
  .btn {
    background-color: #973320;
    border-color: #973320;
  }
  .btn:hover {
    background-color: #b8381e;
    border-color: #c94227;
  }

  .header-image img {
    align-self: center;
    margin: 3.5rem 0rem 0rem -5rem;
    max-height: 70vh;
    animation: bounceTop 2s ease infinite;
  }
  .shape-1 {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 15%;
    top: 20%;
    border-radius: 50%;
    background: #df8611;
    animation: animation 2s linear infinite;
  }
  .shape-2 {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 70%;
    top: 90%;
    border-radius: 50%;
    background: #f5d20f;
    animation: animation 2s linear infinite;
  }
  .shape-3 {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 9%;
    border-radius: 50%;
    background: #c94227;
    animation: animation 2s linear infinite;
  }
  .shape-4 {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 50%;
    top: 60%;
    border-radius: 50%;
    background: #e63408;
    animation: animation 2s linear infinite;
  }
  .shape-5 {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 28%;
    top: 88%;
    border-radius: 50%;
    background: #ca0614;
    animation: animation 2s linear infinite;
  }
  .shape-6 {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 2%;
    top: 40%;
    border-radius: 50%;
    background: #111111;
    animation: animation 2s linear infinite;
  }
  .footer-container .container {
    position: relative;
  }
  .shape-7 {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 2%;
    top: 0%;
    border-radius: 50%;
    background: #111111;
    animation: animation 2s linear infinite;
  }
  .shape-8 {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 70%;
    bottom: 50%;
    border-radius: 50%;
    background: #f5d20f;
    animation: animation 2s linear infinite;
  }
  .shape-9 {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 35%;
    bottom: 20%;
    border-radius: 50%;
    background: #c94227;
    animation: animation 2s linear infinite;
  }
  .shape-10 {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 20%;
    top: 10%;
    border-radius: 50%;
    background: #e63408;
    animation: animation 2s linear infinite;
  }

  .about-title {
    text-align: right;
  }
  span {
    color: #973320;
  }
  .media {
    display: flex;
    gap: 2rem;
  }
  .media-body {
    padding-top: 2rem;
  }
  .media-body h3 {
    font-weight: 800;
  }
  .media img {
    width: 40%;
    height: 35%;
    border-radius: 10px;
  }

  .item-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-title .social ul {
    list-style-type: none;
    display: flex;
    float: right;
  }
  .about-title .social ul li {
    margin-inline: 1rem;
  }
  .about-title .social a {
    text-decoration: none;
    color: #df8611;
  }
  .about-title .social a:hover {
    color: #973320;
  }
  .about-title .social ul li .icons {
    fill: #973320;
  }
  .grid {
    display: grid;
    width: 114em;
    grid-gap: 4rem;
    grid-template-columns: auto auto auto;
    align-items: start;
  }

  .grid-title {
    text-align: center;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  .grid-title span {
    color: #973320;
  }
  .features-Section .grid-item .card {
    height: 100%;
    display: flex;
    align-items: center;
    align-self: center;
    text-align: center;
  }
  .features-Section .grid-item .card .card-img {
    padding-inline: 30%;
    width: 12rem;
    height: 7rem;
  }
  .features-Section .grid-item .card .Orange {
    fill: orange;
  }
  .features-Section .grid-item .card .Blue {
    fill: blue;
  }
  .features-Section .grid-item .card .Pink {
    fill: pink;
  }

  .grid-item .card {
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.2s;
    width: 15rem;
    padding-inline: 1.5rem;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .grid-item .card p {
    font-size: 0.7em;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  .card:hover {
    transform: translate(-0.5%);
    box-shadow: 0 4rem 8rem rgba(70, 33, 33, 0.5);
  }
  .card img {
    display: block;
    max-height: 13rem;
    max-width: 15rem;
  }
  .card h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #0d0d0d;
    margin-bottom: 1.5rem;
  }
  .card p {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    line-height: 1.7;
    color: #3d3d3d;
    margin-bottom: 2.5rem;
  }
  .features-Section {
    text-align: center;
  }
  .faq-holder {
    display: grid;
    height: 85vh;
    gap: 1rem;
  }
  .faq-image-container {
    overflow: hidden;
    display: flex;
  }
  .faq-image-container img {
    max-height: 25rem;
    margin-bottom: 20px;
  }
  .faq-container {
    overflow: auto;
  }
  .faq-container .card {
    border: solid 1px rgba(151, 51, 32, 0.5);
    padding: 0;
  }
  .card-header {
    padding: 0;
  }
  .faq-button {
    padding: 1rem !important ;
    width: 100%;
    background-color: rgb(243, 216, 211) !important;
  }
  .faq-button .enIcon {
    position: absolute;
    right: 25px;
    top: 1.3rem;
    transform: rotate(-90deg);
    fill: #973320;
  }
  .faq-button:hover {
    background-color: rgb(243, 216, 211) !important;
  }
  .faq-button h6 {
    color: aliceblue;
  }
  .row-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-start .container {
    text-align: center;
    clear: both;
  }
  .footer-start .row-items {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .footer-start .row-items .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-img-top {
    height: 100px;
    width: 100px;
  }
  .footer-start .item-container {
    margin-top: 22px;
    margin-bottom: 22px;
  }
  .star-holder {
    padding-bottom: 2rem;
  }
  .star {
    fill: gold !important;
    transform: scale(1.5);
    margin-inline: 12px;
  }
  .partner-title {
    margin-top: 100px;
  }
  .partner-button {
    margin: 1rem;
  }
  .footer-middle {
    min-height: 50vh;
  }
  .footer-middle .icons {
    fill: #973320;
    opacity: 0.7;
  }
  .footer-middle .icons:hover {
    opacity: 1;
  }
  .footer-middle ul {
    list-style-type: none;
  }
  .footer-middle .col-md-4 {
    padding: 1rem;
  }
  .footer-middle .col-md-4 .information {
    padding: 2rem;
  }
  .footer-middle .col-md-4 .information h2 {
    font-weight: bolder;
  }
  .footer-middle .col-md-4 .information h2 span {
    color: #973320;
  }
  .footer-middle .col-md-4 ul {
    display: flex;
    margin-left: -4rem;
  }
  .footer-middle .col-md-4 li {
    margin-left: 2rem;
  }
  .footer-middle ul .li {
    margin-left: -2rem;
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    font-weight: lig;
    margin-top: 3px;
    padding: 7px;
  }
  .col-md-3 {
    padding: 2rem;
  }
  .col-md-3 .icons {
    margin-left: -12px;
    margin-right: 12px;
  }
  .col {
    padding: 2rem;
  }
  .col h4 {
    padding-bottom: 5px;
    font-size: 1.3rem;
    font-weight: bolder;
  }
  .footer-end {
    bottom: 0;
    min-height: 5vh;
    text-align: center;
  }
  .NavCollapse {
    position: absolute;
    right: 50px;
    top: 30px;
  }
  .LandLinks {
    display: flex;
    align-items: center;
    padding-inline: 2rem;
    margin-top: 5px;
    text-align: center;
  }

  @keyframes video {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
  @keyframes bounceTop {
    0%,
    100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(0px);
    }
  }
  @keyframes animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (max-width: 480px) {
  }

  /* Smartphones (landscape) ----------- */
  @media only screen and (min-width: 321px) {
  }

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 577px) {
    .row {
      display: inline-block;
    }
  }
  @media only screen and (min-width: 890px) {
    .NavCollapse {
      display: none;
    }
  }
  @media only screen and (max-width: 890px) {
    .nav-items-container ul {
      display: block;
    }
    .nav-items-container ul {
      display: block;
    }
    .navbar-brand {
      position: absolute;
      left: 0;
      top: 5px;
    }
    .navbar {
      min-height: 10vh;
      max-height: 50vh;
    }
    #navitems {
      margin-right: 50px;
      margin-top: 30px;
    }
    .nav-items {
      margin-top: -5px;
    }
    .land-background-image {
      display: none;
    }
    .shape-1 {
      width: 40px;
      height: 40px;
      left: 5%;
      top: 10%;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .landing-container {
      height: 100vh;
    }
    /* Styles */
  }

  /* iPads (landscape) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    .landing-container {
      height: 100vh;
    }
  }

  /* iPads (portrait) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* Styles */
    .landing-container {
      height: 100vh;
    }
  }

  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    /* Styles */
    .landing-container {
      height: 100vh;
    }
  }

  /* Large screens ----------- */
  @media only screen and (min-width: 1824px) {
    /* Styles */
    .landing-container {
      height: 100vh;
    }
  }

  /* iPhone 4 - 5s ----------- */
  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-device-pixel-ratio: 1.5) {
    /* Styles */
  }

  /* iPhone 6 ----------- */
  @media only screen and (max-device-width: 667px),
    only screen and (-webkit-device-pixel-ratio: 2) {
    /* Styles */
  }

  /* iPhone 6+ ----------- */
  @media only screen and (min-device-width: 414px),
    only screen and (-webkit-device-pixel-ratio: 3) {
    /*** You've spent way too much on a phone ***/
  }

  /* Samsung Galaxy S7 Edge ----------- */
  @media only screen and (-webkit-min-device-pixel-ratio: 3),
    only screen and (min-resolution: 192dpi) and (max-width: 640px) {
    /* Styles */
  }
`;
export default Wrapper;
