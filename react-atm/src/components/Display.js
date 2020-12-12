import React from "react";
import "./Display.css";
import "./Key.css";
import { useStateValue } from "../StateProvider";

function Display() {
  const [{ balance, withdrawing }, dispatch] = useStateValue();
  return (
    <div className="display">
      {withdrawing ? (
        <p>Enter Amount:</p>
      ) : (
        <p className="balance">{balance}</p>
      )}
    </div>
  );
}

export default Display;
