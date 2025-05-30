//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

const path = require('path');

const { main } = require('./package.json');

const { defineConfig } = require(path.resolve(__dirname, main));

module.exports = defineConfig({
  packageRoot: __dirname,
  preset: 'node',
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
  },
});
