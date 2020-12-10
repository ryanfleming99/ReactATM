import axios from "axios";

function ApiRequester() {
  axios
    .post("https://frontend-challenge.screencloud-michael.now.sh/api/pin/", {
      pin: "1111"
      // checking if pin matches the pin in JSON
    })
    .then(function(response) {
      let balance = response.data;
      // returning balance from reponse
      console.log(balance);
      // logging balance
    });
}

export default ApiRequester;
