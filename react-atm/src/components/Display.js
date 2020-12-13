import React from "react";
import "./Display.css";
import "./Key.css";
import { useStateValue } from "../StateProvider";

function Display() {
  const [
    { balance, overdraft, logInError, loggedIn, input, withdrawing }
  ] = useStateValue();
  return (
    <div className="display">
      {!loggedIn && (
        <p className="successMessage">Enter Pin: {input.map(char => "*")}</p>
      )}
      {loggedIn && <p>Balance: {balance}</p>}
      {logInError && (
        <p className="errorMessage">
          Pin entered incorrectly, please try again.
        </p>
      )}
      {withdrawing && <p>Enter Amount: {input} </p>}
      {overdraft && (
        <p className="errorMessage">You have entered your overdraft</p>
      )}
    </div>
  );
}

export default Display;
