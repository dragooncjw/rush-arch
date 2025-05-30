//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
