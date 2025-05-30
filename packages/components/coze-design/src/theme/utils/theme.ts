//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

/**
 * Determines if the theme is a base theme
 *
 * @param theme string
 * @returns "light" | "dark
 */
export const isBaseTheme = (theme: string) =>
  theme === 'light' || theme === 'dark';
