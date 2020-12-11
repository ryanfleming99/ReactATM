import React from "react";
import "./Key.css";
import "./Display.css";
import axios from "axios";

function Key() {
  var keyClicked = [];

  function checkValue() {
    /* let pin = keyClicked.join("");
    if (pin === "1111") {
      console.log("Pin Entered Correctly");
    } else {
      console.log("Pin Entered Incorrectly");
    } */
    var pinCodeSeq = keyClicked.join("");

    console.log(pinCodeSeq);
    var pinFromApi = ApiRequester;
    console.log(pinFromApi);

    if (keyClicked === "1111" && keyClicked === ApiRequester) {
      console.log("Pin is correct!");
    } else {
      console.log("Please enter the correct pin");
    }

    function ApiRequester() {
      axios
        .post(
          "https://frontend-challenge.screencloud-michael.now.sh/api/pin/",
          {
            pin: "1111"
            // checking if pin matches the pin in JSON
          }
        )
        .then(function(response) {
          let balance = response.data;
          // returning balance from reponse
          console.log(balance);
          // logging balance
        });
    }
  }

  /*
    keyClicked.join();
    if (keyClicked.value === "1111") {
      console.log("yes");
    } else console.log("no");
    */

  function clearValue() {
    keyClicked = [];
    console.log("pin cleared successfully");
  }

  function handleClick(e) {
    keyClicked.push(e.target.id);
  }

  return (
    <div className="wrapper">
      <div className="keypad">
        <button onClick={checkValue} className="submit">
          Submit
        </button>
        <button onClick={clearValue} className="clear">
          Clear
        </button>

        <br></br>
        <button onClick={handleClick} data-key="49" id="1" value="1">
          1
        </button>
        <button onClick={handleClick} data-key="50" id="2" value="2">
          2
        </button>
        <button onClick={handleClick} data-key="51" id="3" value="3">
          3
        </button>
        <br></br>
        <button onClick={handleClick} data-key="52" id="4" value="4">
          4
        </button>
        <button onClick={handleClick} data-key="53" id="5" value="5">
          5
        </button>
        <button onClick={handleClick} data-key="54" id="6" value="6">
          6
        </button>
        <br></br>
        <button onClick={handleClick} data-key="55" id="7" value="7">
          7
        </button>
        <button onClick={handleClick} data-key="56" id="8" value="8">
          8
        </button>
        <button onClick={handleClick} data-key="57" id="9" value="9">
          9
        </button>
      </div>
    </div>
  );
}

export default Key;
