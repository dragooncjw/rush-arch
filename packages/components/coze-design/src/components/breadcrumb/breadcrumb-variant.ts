//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { cva, type VariantProps } from 'class-variance-authority';

const breadcrumbVariants = cva(['coz-breadcrumb']);

export type BreadcrumbProps = VariantProps<typeof breadcrumbVariants>;

export { breadcrumbVariants };
