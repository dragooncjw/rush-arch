//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { cva, type VariantProps } from 'class-variance-authority';

const popconfirmVariants = cva(['coz-popconfirm'], {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});

export type PopconfirmVariantProps = VariantProps<typeof popconfirmVariants>;

export { popconfirmVariants };
