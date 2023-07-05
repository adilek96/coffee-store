import React from "react";
import Product from "../product/Product.jsx";
import SearchForm from "../searchForm/SearchForm";

import "./productList.sass";

const ProductList = () => {
  return (
    <section>
      <SearchForm />
      <Product />
    </section>
  );
};

export default ProductList;
