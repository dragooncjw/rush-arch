//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { type ReactElement, type HTMLAttributes } from 'react';
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  keepDocTitle?: boolean;
}
export interface LayoutHeaderProps {
  className?: string;
  title?: string;
  breadcrumb?: ReactElement;
}
export interface LayoutFooterProps {
  className?: string;
}

export interface LayoutContentProps {
  className?: string;
  scrollY?: boolean;
}
