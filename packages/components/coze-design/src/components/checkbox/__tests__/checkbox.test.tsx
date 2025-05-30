//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { Checkbox } from '..';

describe('Checkbox', () => {
  it('render correctly', () => {
    const { container } = render(<Checkbox>Coze Design</Checkbox>);
    expect(container.getElementsByClassName('semi-checkbox')).toHaveLength(1);
  });
});
