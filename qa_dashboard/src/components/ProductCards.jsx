import React from "react";
import products from "../utils/products";
import "../assets/styles/productCards.css";
import logo from "../assets/images/task.png";
const ProductCards = () => {
  return (
    <div className="products-container ">
      <div className="product-title">
        <h4 className="card-title">
          Explore the various <span>Product Houses</span>
        </h4>
      </div>
      <div className="products-cards-container">
        {products.map((products, index) => {
          const { title, Description } = products;
          return (
            <div className="card product-card text-center shadow">
              <div className="overflow">
                <img src={logo} alt="image1" className="card-img-top" />
              </div>
              <div className="card-body product-card-body text-dark">
                <h4 className="card-title">{title}</h4>
                <p className="card-text product-card-text text-secondary">
                  {Description}
                </p>
                <a href="#" className="btn btn-outline-danger">
                  Explore
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
