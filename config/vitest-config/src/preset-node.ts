//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { mergeConfig } from 'vitest/config';

import { defaultVitestConfig } from './preset-default';

export const nodePreset = mergeConfig(defaultVitestConfig, {});
