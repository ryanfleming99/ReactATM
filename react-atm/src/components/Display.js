import React from "react";
import "./Display.css";

function Display() {
  let balance = [];

  return (
    <div class="display">
      <p class="balance">{balance}</p>
    </div>
  );
}

export default Display;
