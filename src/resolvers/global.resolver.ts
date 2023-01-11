import { ArrayRequest } from "../types/ArrayRequest";
import { MockRequest } from "../types/MockRequest";
import { ObjectRequest } from "../types/ObjectRequest";
import { arrayResolver } from "./array.resolver";
import { objectResolver } from "./object.resolver";
import { requestResolver } from "./request.resolver";
import { stringResolver } from "./string.resolver";

export function globalResolver(r: unknown, index?: number): any {
  if (typeof r === "string") return stringResolver(r, index);
  if (r && typeof r === "object") {
    if (Array.isArray(r)) {
      return r.map((i) => globalResolver(i, index));
    }
    return requestResolver(r as MockRequest, index);
  }
  return r;
}
