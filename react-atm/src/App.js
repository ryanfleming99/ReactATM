import "./App.css";
import Key from "./components/Key";
import Display from "./components/Display";
import axios from "axios";

axios.create({
  baseURL: `https://frontend-challenge.screencloud-michael.now.sh/api/pin/`
});

axios({
  method: "post",
  url: "https://frontend-challenge.screencloud-michael.now.sh/api/pin/",
  data: {
    pin: "",
    currentBalance: "Williams"
  }
});

/* const checkSecurityPin = async () => {
  let res = await api.post("/", { Pin: "2222" });
  console.log(res);
}; */

function App() {
  return (
    <div className="App">
      <Display></Display>
      <Key></Key>
      <button onClick="axios()">Get Data</button>
    </div>
  );
}

export default App;
