//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { cva, type VariantProps } from 'class-variance-authority';

const tableVariants = cva(['coz-table'], {
  variants: {
    size: {
      small: ['text-base'],
      default: ['text-lg'],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'default',
  },
});

export type TableProps = VariantProps<typeof tableVariants>;

export { tableVariants };
