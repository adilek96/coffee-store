import React, { Component } from "react";
import MainHeader from "../../components/header/mainHeader/MainHeader";
import AboutUs from "../../components/aboutUs/AboutUs";
import OurBest from "../../components/ourBest/OurBest";
import Footer from "../../components/footer/Footer.jsx";

import "./mainPage.sass";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <main>
          <AboutUs />
          <OurBest />
        </main>
        <Footer />
      </>
    );
  }
}
