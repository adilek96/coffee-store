import React from "react";
import SecondHeader from "../../components/header/secondHeader/SecondHeader";
import Footer from "../../components/footer/Footer";
import AboutBeans from "../../components/aboutBeans/AboutBeans";
import ProductList from "../../components/productList/ProductList";
import SearchForm from "../../components/searchForm/SearchForm";

const SecondPage = () => {
  return (
    <>
      <SecondHeader />
      <AboutBeans />
      <hr />
      <SearchForm />
      <ProductList />
      <Footer />
    </>
  );
};

export default SecondPage;
