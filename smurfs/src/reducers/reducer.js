const initialState = {
  fetching: false,
  smurfs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETSMURF":
      return {
        ...state,
        fetching: true,
      };

    case "SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        fetching: false,
      };

    default:
      return state;
  }
};
