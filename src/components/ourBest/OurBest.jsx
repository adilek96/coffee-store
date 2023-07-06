import React from "react";
import Product from "../../components/product/Product";
import "./ourBest.sass";

const OurBest = ({ data }) => {
  const randomNums = [];
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 8) + 1;
    randomNums.push(num);
  }

  const elements = randomNums
    .map((num) => {
      return data.map((item) => {
        const { id, ...otherItem } = item;
        if (id === num) {
          return <Product key={id} {...otherItem} />;
        }
        return null;
      });
    })
    .flat();

  return (
    <section className="our-best">
      <h2>Our best</h2>
      <div className="best-wrapper">{elements}</div>
    </section>
  );
};

export default OurBest;
