import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export type Mouse = {
  hidden: boolean;
};

const initialState: Mouse = {
  hidden: false,
};

export const mouseSlice = createSlice({
  name: "mouse",
  initialState,
  reducers: {
    setHidden: (state, action: PayloadAction<boolean>) => {
      state.hidden = action.payload;
    },
    toggleHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { setHidden, toggleHidden } = mouseSlice.actions;

export const selectHidden = (state: RootState) => state.mouse.hidden;

export default mouseSlice.reducer;
