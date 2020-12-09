import React, { useState } from "react";
import "./Display.css";

function Display() {
  const pin = 0;
  const enterpin = "Enter Pin:" + `${pin}`;

  let bankAmount = 0;
  let balance = `${bankAmount}`;

  return (
    <div class="display">
      <p>{enterpin}</p>
      <p class="balance">{balance}</p>
    </div>
  );
}

export default Display;
