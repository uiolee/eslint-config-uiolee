# eslint-config-uiolee

[![GitHub Tag](https://img.shields.io/github/v/tag/uiolee/eslint-config-uiolee?logo=github)](https://github.com/uiolee/eslint-config-uiolee/tags)
[![GitHub Release](https://img.shields.io/github/v/release/uiolee/eslint-config-uiolee?logo=github)](https://github.com/uiolee/eslint-config-uiolee/releases)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/uiolee/eslint-config-uiolee/latest?include_prereleases&sort=semver&logo=github)](https://github.com/uiolee/eslint-config-uiolee/compare/...main)
[![GitHub top language](https://img.shields.io/github/languages/top/uiolee/eslint-config-uiolee?logo=github)](#eslint-config-uiolee)
[![Coverage Status](https://coveralls.io/repos/github/uiolee/eslint-config-uiolee/badge.svg?branch=main)](https://coveralls.io/github/uiolee/eslint-config-uiolee?branch=main)
[![CI](https://github.com/uiolee/eslint-config-uiolee/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/uiolee/eslint-config-uiolee/actions/workflows/ci.yml)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/uiolee/eslint-config-uiolee?logo=librariesdotio)](https://libraries.io/github/uiolee/eslint-config-uiolee#dependencies)

[![NPM Version](https://img.shields.io/npm/v/eslint-config-uiolee?logo=npm)](https://www.npmjs.com/package/eslint-config-uiolee)
[![node-lts](https://img.shields.io/node/v-lts/eslint-config-uiolee?logo=nodedotjs)](https://nodejs.org/)
[![NPM License](https://img.shields.io/npm/l/eslint-config-uiolee)](./LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-uiolee?logo=npm)](#eslint-config-uiolee)
[![NPM Downloads](https://img.shields.io/npm/dt/eslint-config-uiolee?logo=npm)](#eslint-config-uiolee)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/eslint-config-uiolee?logo=librariesdotio)](https://libraries.io/npm/eslint-config-uiolee/tree)

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
