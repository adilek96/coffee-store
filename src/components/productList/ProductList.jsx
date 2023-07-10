import React from "react";
import Product from "../product/Product.jsx";

import "./productList.sass";

const ProductList = ({
  data,
  sortingTrigger,
  findTrigger,
  onProductSelect,
}) => {
  // отображение продуктов на странице
  // сортировка продуктов по странам
  const sortingData = data.filter((item) => {
    if (sortingTrigger === "All") {
      return item;
    } else {
      return item.country === sortingTrigger;
    }
  });
  //поиск отсортированных продуктов
  const findingData = sortingData.filter((item) => {
    if (findTrigger === "") {
      return item;
    } else {
      return item.name.toLowerCase().includes(findTrigger.toLowerCase());
    }
  });

  //вывод элементов
  const elements = findingData.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Product onProductSelect={onProductSelect} key={id} {...itemProps} />
    );
  });

  console.log(findTrigger);
  return (
    <section className="product-list">
      <div className="product-list-wrapper">{elements}</div>
    </section>
  );
};

export default ProductList;
