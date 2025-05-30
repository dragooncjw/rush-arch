//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

/** @type {(import('eslint').Linter.Config)[]} */
module.exports = [
  require('eslint-plugin-prettier/recommended'),

  ...require('./rules/common-standard'),
  ...require('./rules/import'),
  ...require('./rules/js-standard'),
  ...require('./rules/ts-standard'),
  ...require('./rules/test-standard'),
];
