import React from "react";
import "./App.scss";
import MainPage from "../MainPage/MainPage";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
