import { configureStore } from "@reduxjs/toolkit";

// reducer
import testReducer from "./redux/reducer";

export default configureStore({
  reducer: {
    todoReducer: testReducer,
  },
});
