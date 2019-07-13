import React, { useState } from "react";

import "./PowerButton.css";

const PowerButton = () => {
  const [toggle, setToggle] = useState("off");

  const handleClick = () => {
    setToggle(toggle === "off" ? "active" : "off");
  };
  return (
    <div id="PowerButton">
      <div id="power-text">
        Power
        <br />
        <button id="btn-bg" className={`${toggle}`} onClick={handleClick}>
          <div id="btn-ring">
            <div id="ring-line" />
          </div>
        </button>
        <br />
        <strong className={`${toggle}`}>
          {toggle === "off" ? "OFF" : "ON"}
        </strong>
      </div>
    </div>
  );
};

export default PowerButton;
