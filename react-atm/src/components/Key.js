import "./Key.css";
import "./Display.css";
import { useStateValue } from "../StateProvider";

function Key() {
  let keyPressed = [];
  const [{ balance, input, withdrawing }, dispatch] = useStateValue();

  const setBalance = currentBalance => {
    dispatch({
      type: "SET_BALANCE",
      item: currentBalance
    });
  };

  function handleClick(e) {
    keyPressed.push(e.target.id);
    console.log(e.target.id);
  }

  function setWithdraw() {
    dispatch({
      type: "SET_WITHDRAW",
      withdrawing: true
    });
    console.log(withdrawing);
  }

  const setInput = event => {
    dispatch({
      type: "SET_INPUT",
      input: event.target.value
    });
  };

  function checkPin() {
    const userNumSeq = keyPressed.join("");
    console.log(userNumSeq);

    const pinFromApi = makeCallToApi(userNumSeq);
    console.log(pinFromApi);
  }

  function makeCallToApi(userNumSeq) {
    const data = {
      pin: userNumSeq
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
        setBalance(res.currentBalance);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function clearArray() {
    keyPressed = [];
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
        <button onClick={setWithdraw} className="withdraw">
          withdraw
        </button>

        <br></br>
        <button onClick={e => setInput(e)} id="1" value="1">
          1
        </button>
        <button onClick={e => setInput(e)} id="2" value="2">
          2
        </button>
        <button onClick={e => setInput(e)} id="3" value="3">
          3
        </button>
        <br></br>
        <button onClick={e => setInput(e)} id="4" value="4">
          4
        </button>
        <button onClick={e => setInput(e)} id="5" value="5">
          5
        </button>
        <button onClick={e => setInput(e)} id="6" value="6">
          6
        </button>
        <br></br>
        <button onClick={e => setInput(e)} id="7" value="7">
          7
        </button>
        <button onClick={e => setInput(e)} id="8" value="8">
          8
        </button>
        <button onClick={e => setInput(e)} id="9" value="9">
          9
        </button>
        <button onClick={e => setInput(e)} id="0" value="0">
          0
        </button>
        <button onClick={e => setInput(e)} id="*" value="*">
          *
        </button>
        <button onClick={e => setInput(e)} id="#" value="#">
          #
        </button>
      </div>
    </div>
  );
}

export default Key;
