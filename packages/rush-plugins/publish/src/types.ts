//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { type Command } from 'commander';

export type InstallAction = (program: Command) => void;
