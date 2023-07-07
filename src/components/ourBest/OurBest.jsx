import React from "react";
import Product from "../../components/product/Product";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./ourBest.sass";

const OurBest = ({ data }) => {
  const randomNums = [];
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 8) + 1;
    randomNums.push(num);
  }

  const elements = randomNums
    .map((num) => {
      return data.map((item) => {
        const { id, ...otherItem } = item;
        if (id === num) {
          return (
            <SplideSlide>
              <Product key={id} {...otherItem} />
            </SplideSlide>
          );
        }
        return null;
      });
    })
    .flat();

  return (
    <section className="our-best">
      <h2>Our best</h2>
      <Splide
        options={{
          trimSpace: true,
          width: "50vw",
          height: "300px",
          updateOnMove: true,
          type: "loop",
          perPage: 2,
          perMove: 1,
          focus: "center",
          gap: "20px",

          breakpoints: {
            920: {
              width: "70vw",
              perPage: 2,
            },
            640: {
              width: "80vw",
              perPage: 1.5,
            },
            432: {
              width: "230px",
              perPage: 1,
            },
          },
        }}
      >
        {elements}
      </Splide>
    </section>
  );
};

export default OurBest;
