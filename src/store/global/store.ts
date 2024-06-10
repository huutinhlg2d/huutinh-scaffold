import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import mouseSlice from "./slice/mouseSlice";

export const store = configureStore({
  reducer: {
    mouse: mouseSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
