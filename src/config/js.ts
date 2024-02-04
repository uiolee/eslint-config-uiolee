import eslint_js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default {
  ...eslint_js.configs.recommended,
  ...eslintPluginPrettierRecommended,
};
