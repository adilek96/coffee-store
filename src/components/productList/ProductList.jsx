import React, { Component } from "react";
import Product from "../product/Product.jsx";
import SearchForm from "../searchForm/SearchForm";

import "./productList.sass";

export default class ProductList extends Component {
  render() {
    return (
      <section>
        <SearchForm />
        <Product />
      </section>
    );
  }
}
