import { folder, LevaInputs } from "leva";
import { Schema } from "leva/dist/declarations/src/types";

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
} satisfies Schema;

export type SchemaType = typeof schema;
