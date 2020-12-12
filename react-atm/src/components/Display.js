import React from "react";
import "./Display.css";
import "./Key.css";
import { useStateValue } from "../StateProvider";

function Display() {
  const [{ balance, input, withdrawing }, dispatch] = useStateValue();
  return (
    <div className="display">{withdrawing && <p>Enter Amount: {input}</p>}</div>
  );
}

export default Display;
