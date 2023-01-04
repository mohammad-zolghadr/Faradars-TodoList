const initialState = {
  count: 0,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      let temp = state.count;
      return { ...state, count: ++temp };
    default:
      return state;
  }
};

export default testReducer;
