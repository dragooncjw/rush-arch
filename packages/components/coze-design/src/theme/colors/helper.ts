//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

export const getCommonItems = (colors: [string, string][]) =>
  colors.map(([key, color]) => ({
    key,
    color,
  }));
