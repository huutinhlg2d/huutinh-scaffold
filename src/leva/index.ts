import { folder, LevaInputs } from "leva";
import { Schema } from "leva/dist/declarations/src/types";

export * from "./types"
export * from "./utils"

export const schema = {
  Sphere: folder({
    sphereWireframe: { type: LevaInputs.BOOLEAN, value: false, label: "wireframe" },
    sphereRotate: { type: LevaInputs.BOOLEAN, value: false, label: "rotate" },
    sphereShadow: { type: LevaInputs.BOOLEAN, value: true, label: "shadow" },
    sphereMetalness: { type: LevaInputs.BOOLEAN, value: 0.9, label: "metalness" },
    sphereRoughness: { type: LevaInputs.NUMBER, value: 0.1, label: "roughness" },
  }),
  Light: folder({
    lightPosition: {
      type: LevaInputs.VECTOR3D,
      value: [0, 3, 3],
      label: "position",
      x: { step: 0.1 },
      y: { step: 0.1 },
      z: { step: 0.1 },
    },
  }),
} satisfies Schema;

export type SchemaType = typeof schema;
