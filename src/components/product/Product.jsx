import React from "react";
import "./product.sass";

const Product = ({ id, name, country, price, image }) => {
  return (
    <div className="product-wrapper" key={id}>
      <div className="product-img">
        <img src={image} alt="coffee" />
      </div>
      <h4>{name}</h4>
      <p className="from">{country}</p>
      <p className="price">{price}$</p>
    </div>
  );
};

export default Product;
