import React from "react";
import MainHeader from "../../components/header/mainHeader/MainHeader";
import AboutUs from "../../components/aboutUs/AboutUs";
import OurBest from "../../components/ourBest/OurBest";
import Footer from "../../components/footer/Footer.jsx";

import "./mainPage.sass";

const MainPage = ({ data }) => {
  return (
    <>
      <MainHeader />
      <main>
        <AboutUs />
        <OurBest data={data} />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
