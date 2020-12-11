import React from "react";
import "./Display.css";

function Display() {
  let balance = [];

  return (
    <div className="display">
      <p className="balance">{balance}</p>
    </div>
  );
}

export default Display;
