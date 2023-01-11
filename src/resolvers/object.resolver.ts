import { ObjectRequest } from "../types/ObjectRequest";
import { globalResolver } from "./global.resolver";

export function objectResolver(r: ObjectRequest, index?: number) {
  const result: Record<string, unknown> = {};
  for (let key of Object.keys(r)) {
    result[key] = globalResolver(r[key]);
  }
  return result;
}
