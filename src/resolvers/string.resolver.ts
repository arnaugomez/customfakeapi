import { faker } from "@faker-js/faker";
import { idResolver } from "./id.resolver";

export function stringResolver(r: string, index?: number) {
  if (r === "id") return idResolver(r, index);

  const nsMatches = r.match(/^[A-Za-z0-9]+/g);
  const fnMatches = r.match(/\.[A-Za-z0-9]+/g);
  if (nsMatches && nsMatches.length > 0 && fnMatches && fnMatches.length > 0) {
    try {
      // @ts-ignore
      return faker[nsMatches[0]][fnMatches[0].substring(1)]();
    } catch (e) {}
  }

  return r;
}
