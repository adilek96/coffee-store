import React from "react";
import "./product.sass";

const Product = ({ id, name, country, price, image, onProductSelect }) => {
  const onClick = (e) => {
    onProductSelect(e.currentTarget.getAttribute("name"));
  };
  return (
    <div className="product-wrapper" name={name} onClick={onClick} key={id}>
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
