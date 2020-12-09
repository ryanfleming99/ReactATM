import "./App.css";
import Key from "./components/Key";
import Display from "./components/Display";
import axios from "axios";

function App() {
  const res = axios
    .post("https://frontend-challenge.screencloud-michael.now.sh/api/pin/", {
      pin: "1111"
      // checking if pin matches the pin in JSON
    })
    .then(function(response) {
      const balance = response.data;
      // returning balance from reponse
      console.log(balance);
      // logging balance
    });

  return (
    <div className="App">
      <Display></Display>
      <Key></Key>
    </div>
  );
}

export default App;
