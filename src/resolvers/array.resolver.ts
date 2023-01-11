import { ArrayRequest } from "../types/ArrayRequest";
import { MockRequest } from "../types/MockRequest";
import { globalResolver } from "./global.resolver";

function getRandomInteger(min: number, max: number) {
  // TODO: throw error fi min > max
  return min + Math.floor(Math.random() * (max - min));
}

function getArrayLength({ min, max, length }: ArrayRequest) {
  if (min && max) {
    return getRandomInteger(min, max);
  }
  return length ?? 5;
}

export function arrayResolver(r: ArrayRequest) {
  const array = Array.from({ length: getArrayLength(r) });
  return array.map((_, i) => globalResolver(r.of, i));
}
