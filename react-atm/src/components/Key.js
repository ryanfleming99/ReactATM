import "./Key.css";
import "./Display.css";
import { useStateValue } from "../StateProvider";

function Key() {
  var keyPressed = [];
  // pin storage
  const [{ balance, loggedIn, input, withdrawing }, dispatch] = useStateValue();
  // importing reducers from reducer.js

  const setBalance = currentBalance => {
    dispatch({
      type: "SET_BALANCE",
      item: currentBalance
    });
  };

  function setWithdraw() {
    dispatch({
      type: "SET_WITHDRAW",
      withdrawing: true
    });
    dispatch({
      type: "CLEAR_INPUT"
    });
  }

  const setInput = e => {
    dispatch({
      type: "SET_INPUT",
      item: e
    });
    console.log(e);
  };

  function checkPin() {
    // if user is not logged in, call api to check the input, .join() used as key pressed are stored in the keyPressed Array
    if (!loggedIn) {
      const userNumSeq = input.join("");
      console.log(userNumSeq);

      const pinFromApi = makeCallToApi(userNumSeq);
      console.log(pinFromApi);

      // take the user pin entered and assign it to the value of the key
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
            // if status 200 is returned, pin is correct
            if (res.ok) {
              console.log("Correct pin!");
              return res.json();
            } else {
              throw new Error("Wrong pin entered");
            }
          })
          .then(res => {
            setBalance(res.currentBalance);
            dispatch({
              type: "LOGGED_IN"
            });
            dispatch({
              type: "LOGGED_IN_ERROR",
              item: false
            });
            console.log(loggedIn);
          })

          // if status is not 200, pin is incorrect and error is thrown via dispatch call to reducer
          .catch(error => {
            console.log(error);
            dispatch({
              type: "LOGGED_IN_ERROR",
              item: true
            });
            dispatch({
              type: "CLEAR_INPUT"
            });
          });
      }
    }
    if (loggedIn && withdrawing) {
      // if pin is entered  correctly & withdrawing
      // dispatch looks into the reducer for a type to action
      if (input <= balance) {
        dispatch({
          type: "START_WITHDRAW"
        });
        dispatch({
          type: "SET_WITHDRAW",
          withdrawing: false
        });
      } else {
        dispatch({
          type: "OVERDRAFT_WARNING"
        });
      }
    }
  }

  // clear array function for clear button
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
          Withdraw
        </button>

        <br></br>
        {/* setInput takes innerHTML of button as a parameter and passes to setInput function */}
        <button onClick={e => setInput(e.target.innerHTML)} id="1" value="1">
          1
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="2" value="2">
          2
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="3" value="3">
          3
        </button>
        <br></br>
        <button onClick={e => setInput(e.target.innerHTML)} id="4" value="4">
          4
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="5" value="5">
          5
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="6" value="6">
          6
        </button>
        <br></br>
        <button onClick={e => setInput(e.target.innerHTML)} id="7" value="7">
          7
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="8" value="8">
          8
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="9" value="9">
          9
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="0" value="0">
          0
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="*" value="*">
          *
        </button>
        <button onClick={e => setInput(e.target.innerHTML)} id="#" value="#">
          #
        </button>
      </div>
    </div>
  );
}

export default Key;
