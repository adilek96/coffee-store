import React, { Component } from "react";
import SecondHeader from "../../components/header/secondHeader/SecondHeader";
import Footer from "../../components/footer/Footer";
import AboutBeans from "../../components/aboutBeans/AboutBeans";
import ProductList from "../../components/productList/ProductList";

export default class SecondPage extends Component {
  render() {
    return (
      <>
        <SecondHeader />
        <AboutBeans />
        <hr />
        <ProductList />
        <Footer />
      </>
    );
  }
}
