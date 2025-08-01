//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import type { LanguageService } from '@coze-editor/code-language-shared';
import { StreamLanguage } from '@codemirror/language';

import { shell as shellMode } from './shell';

const shellLanguage = StreamLanguage.define(shellMode);

class ShellLanguageService implements LanguageService {}

const shellLanguageService = new ShellLanguageService();

const shell = {
  language: shellLanguage,
  languageService: shellLanguageService,
};

export { shell, shellLanguage, shellLanguageService };
