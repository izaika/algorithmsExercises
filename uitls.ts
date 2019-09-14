import { inspect } from "util";
import { pipe } from "ramda";

inspect.defaultOptions.depth = null;

export const log = pipe(
  inspect,
  console.log
);
