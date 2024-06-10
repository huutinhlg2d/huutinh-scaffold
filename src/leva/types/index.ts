import { DataInput as LevaDataInput, SchemaToValues } from "leva/dist/declarations/src/types";

import { SchemaType } from "..";

export type SchemaValues = SchemaToValues<SchemaType>;
export type DataInput<T> = Omit<LevaDataInput, "value"> & { value: T };
export type ValuesToData<T extends object> = { [key in keyof T]: DataInput<T[key]> };
