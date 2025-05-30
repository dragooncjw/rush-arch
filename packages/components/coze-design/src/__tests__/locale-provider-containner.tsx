//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { zh_CN } from '../locales/zh_CN';
import { CDLocaleProvider } from '../locales';

export const LocaleProviderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <CDLocaleProvider locale={zh_CN}>{children}</CDLocaleProvider>;
