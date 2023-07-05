import React from "react";
import Product from "../product/Product.jsx";

import "./productList.sass";

const ProductList = () => {
  return (
    <section className="product-list">
      <div className="product-list-wrapper">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default ProductList;
