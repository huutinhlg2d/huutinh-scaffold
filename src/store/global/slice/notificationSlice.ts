import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

type PopupType = {
  id: string;
  type: MessageBarIntentType;
  title: string;
  description: string;
};

enum MessageBarIntentType {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Error = "error",
}

export const createPopUp = () => {
  const id = _.uniqueId();
  const type = _.sample(MessageBarIntentType)!;
  return {
    id,
    type,
    title: _.invert(MessageBarIntentType)[type as string],
    description: `This is a ${type} notification`,
  };
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState: new Array<PopupType>(),
  reducers: {
    pushNotification: (state, action: PayloadAction<PopupType>) => {
      const { type, title, description } = action.payload;
      const newPopup = {
        id: _.uniqueId(),
        type,
        title,
        description,
      };
      state.unshift(newPopup);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { pushNotification, removeNotification } = notificationSlice.actions;

export { notificationSlice };

export default notificationSlice.reducer;
