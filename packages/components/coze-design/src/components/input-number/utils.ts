//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

export const getPrecisionLength = (num: number) => {
  const numString = String(num);
  const idx = numString.indexOf('.') + 1;
  return idx ? numString.length - idx : 0;
};

export const add = (a: number, step: number, precision: number) =>
  Number((a + step).toFixed(precision));
