import React, { Component } from "react";
import MainPage from "../../pages/mainPage/MainPage";
import SecondPage from "../../pages/secondPage.jsx/SecondPage";
import ThirthPage from "../../pages/thirthPage/ThirthPage";
import { Routes, Route } from "react-router-dom";
import "./app.sass";

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/our-coffee" element={<SecondPage />} />
          <Route path="/for-your-pleasure" element={<ThirthPage />} />
        </Routes>
      </>
    );
  }
}
