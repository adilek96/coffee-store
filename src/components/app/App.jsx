import React, { useState } from "react";
import MainPage from "../../pages/mainPage/MainPage";
import SecondPage from "../../pages/secondPage.jsx/SecondPage";
import ThirthPage from "../../pages/thirthPage/ThirthPage";
import ProductPage from "../../pages/productPage/ProductPage";
import { Routes, Route } from "react-router-dom";
import "./app.sass";

const App = () => {
  const data = [
    {
      id: 1,
      image: "https://redcup.com.ua/wa-data/public/photos/89/00/89/89.970.jpg",
      name: "Brazilian Coffee Beans",
      country: "Brazil",
      price: 7.58,
      description:
        "Excellent coffee beans from the Minas Gerais region in Brazil. They have a rich flavor with hints of chocolate and nuts.",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20210911/pngtree-coffee-drink-coffee-beans-wooden-table-layout-photography-map-image_857193.jpg",
      name: "Kenyan Coffee Beans",
      country: "Kenya",
      price: 8.99,
      description:
        "Wonderful coffee beans from the mountainous regions of Kenya. They have a bright and fruity taste with a slight acidity.",
    },
    {
      id: 3,
      image:
        "https://mycoffe.ru/images/dyn_pic/normal/mojno-li-est-kofeynyie-zerna.jpg",
      name: "Colombian Coffee Beans",
      country: "Colombia",
      price: 7.3,
      description:
        "High-quality coffee beans from the Cauca region in Colombia. They have a rich aroma and a balanced taste with a subtle sweetness.",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-photo/aromatic-coffee-beans-in-a-cup-coffee-beans-for-making-delicious-coffee-in-a-mug-coffee-beans-in-a-whole-form-for-a-drink_252085-15912.jpg",
      name: "Exotic Coffee Beans",
      country: "Brazil",
      price: 7.75,
      description:
        "Unique coffee beans grown at an altitude of 2000 meters in the Serra da Mantiqueira mountains in Brazil. They have an exquisite flavor with notes of fruits and flowers.",
    },
    {
      id: 5,
      image:
        "https://coffeecuattro.ru/image/cache/catalog/articles/kak-obzharit-kofejnye-zerna-index-450x300.jpg",
      name: "Kenyan Plantation Coffee Beans",
      country: "Kenya",
      price: 9.58,
      description:
        "Superb coffee beans grown on plantations in the mountainous regions of Kenya. They have a bright and intense flavor with citrus notes.",
    },
    {
      id: 6,
      image:
        "https://m.gemini.ua/wp-content/uploads/2021/02/coffee-beans-in-glass-and-background_140146-74.jpg",
      name: "Colombian Arabica Blend",
      country: "Colombia",
      price: 6.39,
      description:
        "Excellent blend of high-quality Arabica coffee beans grown in Colombia. It has a smooth and well-balanced flavor with a rich aroma.",
    },
    {
      id: 7,
      image:
        "https://flytothesky.ru/wp-content/uploads/2018/01/54327-696x435.jpg",
      name: "Brazilian Espresso Beans",
      country: "Brazil",
      price: 10.99,
      description:
        "Premium espresso beans from Brazil. They are perfect for creating a rich and intense espresso with a velvety crema.",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNPVnziAkkDW3F6BdXZBxo3IgpqM6I0__OroLxbeVk3d8OgLKBuRWiLFOTOSVu0OJCPI&usqp=CAU",
      name: "Single-Origin Colombian Coffee",
      country: "Colombia",
      price: 9.58,
      description:
        "Single-origin coffee beans from the Huila region in Colombia. They have a complex flavor profile with notes of caramel and tropical fruits.",
    },
  ];

  const [selected, setSelected] = useState("");
  const onProductSelect = (e) => {
    setSelected(e);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage data={data} />} />
        <Route
          path="/our-coffee"
          element={<SecondPage onProductSelect={onProductSelect} data={data} />}
        />
        <Route
          path="/for-your-pleasure"
          element={<ProductPage selected={selected} data={data} />}
        />
      </Routes>
    </>
  );
};

export default App;
