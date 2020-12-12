export const initialState = {
  balance: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Set Balance":
      return {
        ...state,
        balance: action.item
      };
  }
};
