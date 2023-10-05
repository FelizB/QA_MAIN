import React from "react";
import "./css/landing.css";
import Analysis from "../assets/images/analysis.svg";
import SavingsIcon from '@mui/icons-material/Savings';
import SwipeIcon from '@mui/icons-material/Swipe';
import WidgetsIcon from '@mui/icons-material/Widgets';

function Features(){
    return(
         <div className="container features-Section">
                <div className="grid-title">
                    <h1>Our Awesome <span>Features</span></h1>
                    <div>
                    <h3>An <strong>award-winning</strong> platform. <strong>Loved</strong> by Customers</h3>
                    <p>Based on 10,000+ customer reviews</p>
                </div>
                </div>
                <div className="item-container">
                  <div className="row">
                        <div className="col-sm grid-item">
                            <div className="card">
                                <SwipeIcon className="card-img Blue"/>
                                <div >
                                    <h4 >Ease To Use</h4>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm grid-item">
                            <div className="card">
                                <SavingsIcon className="card-img Pink"/>
                                <div >
                                    <h4 >Save you Money</h4>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm grid-item">
                            <div className="card">
                                <WidgetsIcon className="card-img Orange"/>
                                <div >
                                    <h4 >Fully Responsive</h4>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>
                  </div>     
                </div>
                <div>
                    <br/>
                    <p>We offer those looking for growth opportunities, such as the youth, women and entrepreneurs, 
                    a powerful methodology that sources the finest talent and intellectual capital and leverages Referral Board systems.</p>
                </div>
                <br />
                <br />
            </div>
    )
}
export default Features;