import { configureStore } from "@reduxjs/toolkit";

import reduxReducer from "./redux/reduxReducer";

const store = configureStore({
  reducer: {
    workAddReducer: reduxReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
