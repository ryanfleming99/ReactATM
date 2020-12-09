import React from "react";
import "./Display.css";

function Display() {
  const pin = 0;
  const enterpin = "Enter Pin: " + "${pin}";
  let balance = [];

  return (
    <div class="display">
      <p class="balance">{balance}</p>
    </div>
  );
}

export default Display;
