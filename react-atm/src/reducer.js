export const initialState = {
  balance: 0,
  withdrawing: false,
  input: [],
  loggedIn: false,
  logInError: false,
  overdraft: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        // using ...state.input checks the latest state of input and appends the action into the input array
        ...state,
        input: [...state.input, action.item]
      };

    case "SET_BALANCE":
      return {
        // ...state checks the latest balance
        ...state,
        balance: action.item
      };

    case "LOGGED_IN":
      return {
        // called only if the post API request pin data matches the input via the checkPin function
        ...state,
        loggedIn: true
      };

    case "LOGGED_IN_ERROR":
      return {
        // called if the post API request pin data does not match the input via the checkPin function
        ...state,
        logInError: action.item
      };

    case "CLEAR_INPUT":
      return {
        // called if user clicks the clear button via key.js
        ...state,
        input: []
      };

    case "SET_WITHDRAW":
      return {
        // called if user clicks the withdraw button via key.js

        ...state,
        withdrawing: action.withdrawing
      };

    case "START_WITHDRAW":
      return {
        // used to calculate the current balance and minus the users input then uses .join("") to concatenate the values and remove from array
        ...state,
        balance: state.balance - state.input.join("")
      };

    case "OVERDRAFT_WARNING":
      return {
        // used to calculate if the user attempts to withdraw more than current balance
        ...state,
        balance: state.balance - state.input.join(""),
        overdraft: true
      };

    default:
      return state;
  }
};

export default reducer;
