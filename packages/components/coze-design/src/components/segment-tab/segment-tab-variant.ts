//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { cva, type VariantProps } from 'class-variance-authority';

const segmentTabVariants = cva('coz-segment-tab', {
  variants: {
    size: {
      small: ['coz-segment-tab-small'],
      default: [],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'default',
  },
});

export type SegmentTabProps = VariantProps<typeof segmentTabVariants>;

export { segmentTabVariants };
