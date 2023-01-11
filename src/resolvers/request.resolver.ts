import { ArrayRequest } from "../types/ArrayRequest";
import { MockRequest } from "../types/MockRequest";
import { ObjectRequest } from "../types/ObjectRequest";
import { arrayResolver } from "./array.resolver";
import { objectResolver } from "./object.resolver";

export function requestResolver(r: MockRequest, index?: number): any {
  if (r.array === true) {
    return arrayResolver(r as ArrayRequest);
  }
  return objectResolver(r as ObjectRequest, index);
}
