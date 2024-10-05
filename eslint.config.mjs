/*
NOTICE:

This is the eslint config of this project itself.
Not the part of this package.

 */

import { js, ts, jest } from "eslint-config-uiolee/configs";

export default [
  ...js,
  ...ts,
  //  ...jest,
  { ignores: ["build/**", "dist/**"] },
];
