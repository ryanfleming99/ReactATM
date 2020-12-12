export const initialState = {
  balance: 0,
  withdrawing: false,
  input: []
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

    case "SET_WITHDRAW":
      return {
        ...state,
        withdrawing: action.withdrawing
      };

    default:
      return state;
  }
};

export default reducer;
