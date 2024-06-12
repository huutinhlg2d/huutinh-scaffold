import { button, folder, LevaInputs } from "leva";
import { Schema } from "leva/dist/declarations/src/types";
import { GenericSchemaItemOptions } from "leva/src/types";
import _ from "lodash";

import { createPopUp, pushNotification, removeNotification, store } from "@/store/global";
import { env } from "@/utils";

export * from "./types";
export * from "./utils";

export const schema = {
  Common: folder({
    commonPublicGuid: { type: LevaInputs.STRING, value: env.VITE_COMMON_PUBLIC_GUID, label: "Common public guid" },
  }),
  Dialog: folder({
    open: { type: LevaInputs.BOOLEAN, value: true, label: "Open dialog" },
  }),
  Redux: folder({
    notificationAdd: _.mergeWith(
      button(() => {
        store.dispatch(pushNotification(createPopUp()));
      }),
      { label: "Add notification" } as GenericSchemaItemOptions,
    ),
    notificationRemove: _.mergeWith(
      button(() => {
        store.dispatch(removeNotification(store.getState().notifications.at(-1)?.id ?? ""));
      }),
      { label: "Remove notification" } as GenericSchemaItemOptions,
    ),
  }),
} satisfies Schema;

export type SchemaType = typeof schema;
