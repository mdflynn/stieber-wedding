import React, { useEffect } from "react";
import "./Footer.scss";
import onlyYou from "../../assets/only-you.mp3";

const Footer = () => {
  let audio = new Audio(onlyYou);

  const start = () => {
    audio.play();
    audio.volume = 0.1;
  };

  const stop = () => {
    audio.pause();
  };

  useEffect(() => {
    start();
  }, [start]);

  return (
    <footer>
      <p className="footer-text">copyright © 2021 Fresh To Dev</p>
      <div>
        <button onClick={start}>Play Song</button>
        <button onClick={stop}>Stop Song</button>
      </div>
      <br />
      <div className="attribution-block">
        <a href="http://dig.ccmixter.org/files/admiralbob77/46186">
          Only You (unplugged)
        </a>{" "}
        by Admiral Bob (c) copyright 2014 Licensed under a Creative Commons{" "}
        <a href="http://creativecommons.org/licenses/by-nc/3.0/">
          Attribution Noncommercial (3.0)
        </a>{" "}
        license. Ft: snowflake
      </div>
    </footer>
  );
};

export default Footer;
