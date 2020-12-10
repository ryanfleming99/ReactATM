import React from "react";
import "./Key.css";
import "./Display.css";

function Key() {
  function handleClick(e) {
    e.preventDefault();
    let numberReturned = document.querySelectorAll("button");
    console.log(numberReturned);
  }

  /* function handleClick(e) {
    var val = document.getElementById("one").value
    console.log(val);
  } */

  return (
    <div class="wrapper">
      <div class="keypad">
        <button class="submit">Submit</button>
        <button class="clear">Clear</button>

        <br></br>
        <button onClick={handleClick} data-key="49" value="1">
          1
        </button>
        <button onClick={handleClick} data-key="50" value="2">
          2
        </button>
        <button onClick={handleClick} data-key="51" value="3">
          3
        </button>
        <br></br>
        <button onClick={handleClick} data-key="52" value="4">
          4
        </button>
        <button onClick={handleClick} data-key="53" value="5">
          5
        </button>
        <button onClick={handleClick} data-key="54" value="6">
          6
        </button>
        <br></br>
        <button onClick={handleClick} data-key="55" value="7">
          7
        </button>
        <button onClick={handleClick} data-key="56" value="8">
          8
        </button>
        <button onClick={handleClick} data-key="57" value="9">
          9
        </button>
      </div>
    </div>
  );
}

export default Key;
