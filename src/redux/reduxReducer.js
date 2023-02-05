const initState = {
  workList: [],
};

const reduxReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_WORK":
      state.workList = [...state.workList, action.payload];
      // save to local
      return state;
    case "REMOVE_WORK":
      const newState = state.workList.filter((e) => e.id !== action.payload.id);
      // remove from local
      return { workList: newState };
    case "DONE_WORK":
      const indexDone = state.workList.findIndex(
        (e) => e.id === action.payload.id
      );
      state.workList[indexDone] = { ...action.payload, isDone: true };
      // edit local
      return state;
    case "UNDONE_WORK":
      const indexUndone = state.workList.findIndex(
        (e) => e.id === action.payload.id
      );
      state.workList[indexUndone] = { ...action.payload, isDone: false };
      // edit local
      return state;
    default:
      return state;
  }
};
export default reduxReducer;
