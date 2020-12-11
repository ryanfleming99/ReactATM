import React from "react";
import "./Key.css";
import "./Display.css";

function Key() {
  var pinArray = [];

  function handleClick(e) {
    pinArray.push(e.target.id);
    console.log(e.target.id);
  }

  function checkPin() {
    var userNumSeq = pinArray.join("");
    console.log(userNumSeq);

    var pinFromApi = makeCallToApi(userNumSeq);
    console.log(pinFromApi);
  }

  function makeCallToApi(pinFromUser) {
    var data = {
      pin: pinFromUser
    };

    fetch("https://frontend-challenge.screencloud-michael.now.sh/api/pin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          console.log("Correct pin!");
          return res.json();
        } else {
          throw new Error("Wrong pin entered");
        }
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log(error);
      });
  }

  function logPinArray() {
    console.log(pinArray);
  }

  function clearArray() {
    pinArray = [];
  }

  return (
    <div className="wrapper">
      <div className="keypad">
        <button onClick={checkPin} className="submit">
          Submit
        </button>
        <button onClick={clearArray} className="clear">
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
