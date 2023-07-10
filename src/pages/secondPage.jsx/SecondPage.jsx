import React, { useState } from "react";
import SecondHeader from "../../components/header/secondHeader/SecondHeader";
import Footer from "../../components/footer/Footer";
import AboutBeans from "../../components/aboutBeans/AboutBeans";
import ProductList from "../../components/productList/ProductList";
import SearchForm from "../../components/searchForm/SearchForm";

const SecondPage = ({ data, onProductSelect }) => {
  const [sortingTrigger, setSortingTrigger] = useState("All");
  const [findTrigger, setFindTrigger] = useState("");

  const onSortingTriggerChange = (e) => {
    setSortingTrigger(e);
  };

  const onFindTriggerChange = (e) => {
    setFindTrigger(e);
  };
  return (
    <>
      <SecondHeader />
      <AboutBeans />
      <hr />
      <SearchForm
        onSortingTriggerChange={onSortingTriggerChange}
        onFindTriggerChange={onFindTriggerChange}
      />
      <ProductList
        data={data}
        onProductSelect={onProductSelect}
        sortingTrigger={sortingTrigger}
        findTrigger={findTrigger}
      />
      <Footer />
    </>
  );
};

export default SecondPage;
