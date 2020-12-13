import React from "react";
import "./Display.css";
//importing styles from display
import "./Key.css";
//importing styles from key
import { useStateValue } from "../StateProvider";
// StateProvider allows component to access current state of components

function Display() {
  const [
    { balance, overdraft, logInError, loggedIn, input, withdrawing }
  ] = useStateValue();
  // importing reducers from reducer.js
  return (
    <div className="display">
      {!loggedIn && <p>Enter Pin: {input.map(char => "*")}</p>}
      {loggedIn && <p>Balance: {balance}</p>}
      {logInError && (
        <p className="errorMessage">
          Pin entered incorrectly, please try again.
        </p>
      )}
      {withdrawing && <p>Enter Amount: {input} </p>}
      {withdrawing && balance < 0 && (
        <p className="errorMessage">You have entered your overdraft</p>
      )}
    </div>
  );
}

export default Display;
