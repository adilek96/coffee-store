import React from "react";
import "./product.sass";

const Product = () => {
  return (
    <div className="product-wrapper">
      <div className="product-img">
        <img src="../img/coffee.png" alt="coffee" />
      </div>
      <h4>AROMISTICO Coffee 1 kg</h4>
      <p className="from">Brazil</p>
      <p className="price">6.99$</p>
    </div>
  );
};

export default Product;
