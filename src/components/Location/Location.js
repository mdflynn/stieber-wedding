import React, { Fragment } from "react";
import "./Location.scss";
import ranch from "../../assets/ranch.jpeg";

const Location = () => {
  return (
    <Fragment>
      <div className="location-div">
        <img className="location-img" src={ranch} alt="Younger Ranch" />
        <span className="location-text">
          September 25th <br />@<br />
          Younger Ranch
        </span>
      </div>
      <a
        class="direction-btn"
        href="https://www.google.com/maps/place/Younger+Ranch/@39.0918622,-104.7140757,12.25z/data=!4m5!3m4!1s0x0:0x850abcd72753b394!8m2!3d39.1032474!4d-104.7243749"
        target="_blank"
        rel="noreferrer"
      >
        Get Directions
      </a>
    </Fragment>
  );
};

export default Location;
