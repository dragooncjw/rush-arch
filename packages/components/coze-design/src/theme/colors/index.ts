//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { semanticColors } from './semantic';
import { commonColors } from './common';

export type {
  ColorScale,
  BaseColors,
  ThemeColors,
  SemanticBaseColors,
} from './types';

export { getCommonItems } from './helper';

const colors = {
  ...commonColors,
  ...semanticColors,
};

export { colors, commonColors, semanticColors };
