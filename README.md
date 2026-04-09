# eslint-config-uiolee

[![GitHub Tag](https://img.shields.io/github/v/tag/uiolee/eslint-config-uiolee?logo=github)](https://github.com/uiolee/eslint-config-uiolee/tags)
[![GitHub Release](https://img.shields.io/github/v/release/uiolee/eslint-config-uiolee?logo=github)](https://github.com/uiolee/eslint-config-uiolee/releases)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/uiolee/eslint-config-uiolee/latest?include_prereleases&sort=semver&logo=github)](https://github.com/uiolee/eslint-config-uiolee/compare/...main)

[![CI](https://github.com/uiolee/eslint-config-uiolee/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/uiolee/eslint-config-uiolee/actions/workflows/ci.yml)
[![release](https://github.com/uiolee/eslint-config-uiolee/actions/workflows/release.yml/badge.svg)](https://github.com/uiolee/eslint-config-uiolee/actions/workflows/release.yml)

[![NPM Version](https://img.shields.io/npm/v/eslint-config-uiolee?logo=npm)](https://www.npmjs.com/package/eslint-config-uiolee)
[![node-lts](https://img.shields.io/node/v-lts/eslint-config-uiolee?logo=nodedotjs)](https://nodejs.org/about/previous-releases)

## Example

```javascript eslint.config.mjs
// eslint.config.mjs
import { js, ts, jest } from "eslint-config-uiolee/configs";

export default [
  ...js,
  ...ts,
  // ...jest,
  { ignores: ["build/**", "dist/**"] },
];
```
