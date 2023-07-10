import React from "react";
import SecondHeader from "../../components/header/secondHeader/SecondHeader";
import Footer from "../../components/footer/Footer";
import Beans from "../../components/beans/Beans";
import "./productPage.sass";

const ProductPage = ({ data, selected }) => {
  const elements = data.map((item) => {
    const { id, name, country, price, image, description } = item;
    if (name === selected) {
      return (
        <div className="product-container" key={id}>
          <img className="product-image" src={image} alt="coffee" />
          <div className="product-about">
            <h2>About It</h2>
            <Beans />
            <h4>{name}</h4>
            <p>{description}</p>
            <p className="from">{country}</p>
            <p className="price">{price}$</p>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <SecondHeader />
      <section className="productPage">{elements}</section>

      <Footer />
    </>
  );
};
export default ProductPage;
