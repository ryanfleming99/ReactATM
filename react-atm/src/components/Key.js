import React from "react";
import "./Key.css";
import "./Display.css";

function Key() {
  return (
    <div class="wrapper">
      <div class="keypad">
        <button class="submit">Submit</button>
        <button class="clear">Clear</button>

        <br></br>
        <button data-key="49">1</button>
        <button data-key="50">2</button>
        <button data-key="51">3</button>
        <br></br>
        <button data-key="52">4</button>
        <button data-key="53">5</button>
        <button data-key="54">6</button>
        <br></br>
        <button data-key="55">7</button>
        <button data-key="56">8</button>
        <button data-key="57">9</button>
      </div>
    </div>
  );
}

export default Key;
