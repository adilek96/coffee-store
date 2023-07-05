import React from "react";
import SecondHeader from "../../components/header/secondHeader/SecondHeader";
import Footer from "../../components/footer/Footer";
import AboutBeans from "../../components/aboutBeans/AboutBeans";
import ProductList from "../../components/productList/ProductList";

const SecondPage = () => {
  return (
    <>
      <SecondHeader />
      <AboutBeans />
      <hr />
      <ProductList />
      <Footer />
    </>
  );
};

export default SecondPage;
