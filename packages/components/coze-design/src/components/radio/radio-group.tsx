//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { forwardRef } from 'react';

import { type RadioGroupProps } from '@douyinfe/semi-ui/lib/es/radio/index.js';
import { RadioGroup as SemiRadioGroup } from '@douyinfe/semi-ui';

import { cn } from '@/utils';

import { radioButtonVariants } from './radio-variant';

export const RadioGroup = forwardRef<SemiRadioGroup, RadioGroupProps>(
  (props, ref): JSX.Element => {
    const { children, ...restProps } = props;

    const { options } = restProps;

    /**
     * pureCard 模式下，将 coz-radio 的样式拼接上去
     * 暂时只兼容 pureCard 模式，其他模式下业务侧已经有了很多自定义 className
     */
    if (options && restProps.type === 'pureCard') {
      restProps.options = options.map(opt => {
        if (typeof opt === 'string') {
          return {
            label: opt,
            className: radioButtonVariants(),
          };
        } else {
          return {
            ...opt,
            className: cn(radioButtonVariants(), opt.className),
          };
        }
      });
    }

    return (
      <SemiRadioGroup {...restProps} ref={ref}>
        {children}
      </SemiRadioGroup>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
