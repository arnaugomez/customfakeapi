import { globalResolver } from "../resolvers/global.resolver";
import { MockRequest } from "../types/MockRequest";

export function mockController(request: unknown) {
  return globalResolver(request)
}