import { configureStore } from "@reduxjs/toolkit";

import reduxReducer from "./redux/reduxReducer";

const store = configureStore({
  reducer: {
    workAddReducer: reduxReducer,
  },
});

export default store;
