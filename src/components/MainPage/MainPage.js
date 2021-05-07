import React from "react";
import "./MainPage.scss";
import stockOne from "../../assets/stock-1.jpg";

const MainPage = () => {
  return (
    <main>
      <div className="bg"></div>
      <p>
        This example creates a full page background image. Try to resize the
        browser window to see how it always will cover the full screen (when
        scrolled to top), and that it scales nicely on all screen sizes.
      </p>
    </main>
  );
};

export default MainPage;
