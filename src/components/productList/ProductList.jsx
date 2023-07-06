import React from "react";
import Product from "../product/Product.jsx";

import "./productList.sass";

const ProductList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <Product key={id} {...itemProps} />;
  });

  return (
    <section className="product-list">
      <div className="product-list-wrapper">{elements}</div>
    </section>
  );
};

export default ProductList;
