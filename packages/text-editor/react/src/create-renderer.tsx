//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import React, { useMemo } from 'react';

import { type EditorPluginSpec } from '@coze-editor/core';
import { type Extension } from '@codemirror/state';

import { Renderer, type InferRendererProps } from './renderer';

const OriginRenderer: (props: any) => JSX.Element = Renderer;

function createRenderer<T extends EditorPluginSpec<string, any, any>[]>(
  plugins: T,
  builtinExtensions?: Extension[],
) {
  return function CustomRenderer(props: InferRendererProps<T>) {
    const userExtensions = props.extensions;

    const extensions: Extension[] = useMemo(
      () => [...(builtinExtensions ?? []), ...(userExtensions ?? [])],
      [userExtensions],
    );

    return (
      <OriginRenderer {...props} extensions={extensions} plugins={plugins} />
    );
  };
}

export { createRenderer };
