//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { useDarkMode } from 'storybook-dark-mode';

export function useDarkTheme() {
  const storyBookTheme = useDarkMode();
  return storyBookTheme ? 'dark' : 'light';
}
