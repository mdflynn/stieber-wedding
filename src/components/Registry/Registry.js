import React from "react";
import "./Registry.scss";

const Registry = () => {
  return (
    <div className="registry-div">
      <p>
        The most important thing for us is your presence during the day to<br />
        celebrate our marriage, but if you do want to make a gesture, please<br />
        feel free to donate to our Honeymoon Pool below
      </p>
      <div>
        <div className="container">
          <a href="https://paypal.me/pools/c/8zmuv6khmd" target="_blank">
            <div className="registry-btn">
              <span>Donate</span>
            </div>
            <div className="sun"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registry;
