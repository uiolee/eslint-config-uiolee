import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

// import eslint_js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  ...compat.extends("plugin:jest/recommended"),
  eslintPluginPrettierRecommended,
];
