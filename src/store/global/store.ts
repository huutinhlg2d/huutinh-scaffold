import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import mouseSlice from "./slice/mouseSlice";
import notificationSlice from "./slice/notificationSlice";

export const store = configureStore({
  reducer: {
    mouse: mouseSlice,
    notifications: notificationSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
