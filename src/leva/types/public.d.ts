import { RenderFn } from "leva/dist/declarations/src/types";

declare module "leva/src/types" {
  export type GenericSchemaItemOptions = {
    render?: RenderFn;
    label?: string | JSX.Element;
    hint?: string;
    order?: number;
  };
}
