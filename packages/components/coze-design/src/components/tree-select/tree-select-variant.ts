//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { cva, type VariantProps } from 'class-variance-authority';

export const treeSelectVariant = cva(['coz-tree-select'], {
  variants: {},
  defaultVariants: {},
});

export type TreeSelectVariantProps = VariantProps<typeof treeSelectVariant>;
