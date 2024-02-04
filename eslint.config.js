/* 
NOTICE:

This is the eslint config of this project itself. 
Not the part of this package.

 */

import { ts, js } from "./lib/index.js";
export default [
  js,
  ...ts.map((config) => {
    if (config.files == null) {
      config.files = ["**/*.{mts,cts,ts}"];
    }
    return config;
  }),
  { ignores: ["lib/**", "dist/**"] },
];
