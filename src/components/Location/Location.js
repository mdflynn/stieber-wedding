import React from "react";
import "./Location.scss";
import ranch from "../../assets/ranch.jpeg";

const Location = () => {
  return (
    <div className="location-div">
      <img className="location-img" src={ranch} alt="ranch" />
      <span className="location-text">
        September 25th <br />@<br />
        Younger Ranch
      </span>
    </div>
  );
};

export default Location;
