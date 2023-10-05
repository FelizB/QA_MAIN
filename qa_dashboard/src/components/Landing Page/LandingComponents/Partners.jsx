import React from "react";
import "./css/landing.css";
import { Link } from "react-router-dom";
import Analysis from "../assets/images/analysis.svg";
import Microsoft from "../assets/images/Microsoft.svg";
import Google from "../assets/images/Google.svg";
import Huawei from "../assets/images/Huawei.svg";
import StarIcon from '@mui/icons-material/Star';

function Partners(){
        return(
            <div className="footer-start">
            <hr />
            <div className="container">
            <div className="partner-title">
                <div className="star-holder"><StarIcon className="star"/><StarIcon className="star"/><StarIcon className="star"/><StarIcon className="star"/><StarIcon className="star"/></div>
                <div>
                    <h3>An <strong>award-winning</strong> platform. <strong>Loved</strong> by Customers</h3>
                    <p>Based on 10,000+ customer reviews</p>
                </div>

            </div>
            <div>
                <div className="row-items">
                    <div className="row">
                        <div className="col-sm grid-item">
                            <div class="card">
                                <img class="card-img-top" src={Google} alt="test"/>
                                <div class="card-body">
                                    <p class="card-text">
                                    Partner for more than 10 years. We appreciate the confidence in us.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm grid-item">
                            <div class="card">
                                <img class="card-img-top" src={Microsoft} alt="test"/>
                                <div class="card-body">
                                    <p class="card-text">Partner for more than 10 years. We appreciate the confidence in us.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm grid-item">
                            <div class="card">
                                <img class="card-img-top" src={Huawei} alt="test"/>
                                <div class="card-body">
                                    <p class="card-text">Partner for more than 10 years. We appreciate the confidence in us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div>
                    <h3>Get the best employee of the period <strong>with Referral Board</strong></h3>
                    <h5>Easy and Simple to use "*" Efficient and trasparent processes  </h5>
                </div>
                <Link to="/sign"><button type="button" class="btn btn-primary btn-lg partner-button">Get started</button></Link>

            </div>

        </div>
        </div>
        )
}
export default Partners;