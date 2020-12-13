import { current } from "immer";

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
        ...state,
        input: [...state.input, action.item]
      };

    case "SET_BALANCE":
      return {
        ...state,
        balance: action.item
      };

    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: true
      };

    case "LOGGED_IN_ERROR":
      return {
        ...state,
        logInError: action.item
      };

    case "CLEAR_INPUT":
      return {
        ...state,
        input: []
      };

    case "SET_WITHDRAW":
      return {
        ...state,
        withdrawing: action.withdrawing
      };

    case "START_WITHDRAW":
      return {
        ...state,
        balance: state.balance - state.input.join("")
      };

    case "OVERDRAFT_WARNING":
      return {
        ...state,
        balance: state.balance - state.input.join(""),
        overdraft: true
      };

    default:
      return state;
  }
};

export default reducer;
