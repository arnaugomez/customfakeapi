import { MockRequest } from "./MockRequest";

export interface ArrayRequest {
  array: true,
  min?: number,
  max?: number,
  length?: number,
  of: MockRequest
}