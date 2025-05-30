//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import '@testing-library/jest-dom';

import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { Content } from '..';

describe('Content', () => {
  it('Content should render', () => {
    const { queryByText } = render(<Content>Content</Content>);

    expect(queryByText('Content')).toHaveClass('coz-common-content');
  });
});
