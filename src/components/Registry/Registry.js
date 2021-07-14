import React from "react";
import "./Registry.scss";

const Registry = () => {
  return (
    <div className="registry-div">
      <p className="registry-p">
        The most important thing for us is your presence during the day to
        celebrate our marriage, but if you do want to make a gesture, please
        feel free to donate to our Honeymoon Pool below
      </p>
      <div>
        <div className="container">
          <a
            href="https://paypal.me/pools/c/8B9KhrandK"
            target="_blank"
            rel="noreferrer"
          >
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
