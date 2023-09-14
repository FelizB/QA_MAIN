import React from "react";
import products from "../utils/products";
import { NavLink } from "react-router-dom";
import "../assets/styles/productCards.css";
const ProductCards = () => {
  return (
    <div className="row align-items-center">
      {products.map((products, index) => {
        const { title, Description } = products;
        return (
          <div className="col">
            <div className="product-card-container col-6 card">
              <div className="product-cards">
                <NavLink
                  key={index}
                  className={"product-list"}
                  onClick={""}
                  end
                >
                  <h6>{title}</h6>
                  <hr />
                  <p>{Description}</p>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
