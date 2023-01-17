import { globalResolver } from "./global.resolver";

export function tupleResolver(r: unknown[], index?: number): any {
  return r.map((i) => globalResolver(i, index));
}
