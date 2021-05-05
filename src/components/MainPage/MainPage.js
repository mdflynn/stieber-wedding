import React from "react";
import "./MainPage.scss";
import stockOne from "../../assets/stock-1.jpg";

const MainPage = () => {
  return (
    <main>
      <img id="main-img" src={stockOne} alt="engagement photo" />
    </main>
  );
};

export default MainPage;
