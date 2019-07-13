import React from "react";

import "./Switch.css";

const Switch = () => (
  <div id="Switch">
    <span class="toggle">
      <input type="checkbox" />
      <label data-off="Kit 1" data-on="Kit 2" />
    </span>
  </div>
);

export default Switch;
