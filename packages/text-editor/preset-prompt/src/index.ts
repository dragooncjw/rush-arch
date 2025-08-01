//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import { sharedPreset } from '@coze-editor/preset-expression';
import { focusableKeymap } from '@coze-editor/extensions';
import {
  getMainSelectionRects,
  maxHeight,
  minHeight,
  replaceText,
  undo,
  redo,
  height,
  transformTextInSelection,
} from '@coze-editor/core-plugins';
import {
  type InferEditorAPIFromPlugins,
  api,
  extension,
  option,
} from '@coze-editor/core';
import { Prec } from '@codemirror/state';

import { languageSupport, markdownLanguage, promptLanguage } from './language';
import { fixSougouInput } from './fix-sougou-input';

// const forEachFocusableWidget = ({ view }: { view: EditorView }) => {
//   return (callback: (from, to, widget) => void) => {
//     // use requestMeasure to ensure view is ready
//     view.requestMeasure({
//       read(view) {
//         // @ts-ignore
//         for (const line of view.docView.children) {
//           for (const widget of line.children) {
//             if (widget.isWidget && (widget.widget instanceof FocusableWidget)) {
//               callback(widget.posAtStart, widget.posAtEnd, widget.widget)
//             }
//           }
//         }
//       },
//     })
//   }
// }

// prompt preset 不使用 drawSelection 的原因：遇到跨行的 inline widget 时光标位置存在问题
const preset = [
  ...sharedPreset,
  option('minHeight', minHeight),
  option('maxHeight', maxHeight),
  option('height', height),
  api('getMainSelectionRects', getMainSelectionRects),
  api('replaceText', replaceText),
  api('undo', undo),
  api('redo', redo),
  api('transformTextInSelection', transformTextInSelection),
  extension([Prec.high(focusableKeymap), fixSougouInput]),
];

type EditorAPI = InferEditorAPIFromPlugins<typeof preset>;

export default preset;

export { promptLanguage, markdownLanguage, languageSupport };

export type { EditorAPI };
