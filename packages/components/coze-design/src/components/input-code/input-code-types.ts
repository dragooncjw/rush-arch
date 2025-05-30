//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { type HTMLAttributes } from 'react';

import { type IComponentBaseProps } from '@/typings';

import { type InputProps } from '../input/input-types';

export interface InputCodeProps
  extends IComponentBaseProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  length?: number;
  value?: string;
  disabled?: boolean;
  error?: boolean;

  type?: 'text' | 'password';

  inputProps?: InputProps;

  onChange?: (value: string) => void;
  onFinish?: (value: string) => void;
}
