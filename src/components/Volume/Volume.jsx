import React from "react";

import "./Volume.css";

const Volume = () => (
  <div id="Volume">
    <div class="map-slider">
      <div class="buttons">
        <span class="fa fa-plus">&#43;</span>
        <div class="drag-line">
          <div class="line" />
          <div class="draggable-button" />
        </div>
        <div class="draggable-buton" />
        <span class="fa fa-minus">&#8722;</span>
      </div>
    </div>
  </div>
);

export default Volume;
