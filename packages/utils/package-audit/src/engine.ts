//  Copyright (c) 2025 coze-dev
//  SPDX-License-Identifier: MIT

import type { RushConfigurationProject } from '@coze-arch/monorepo-kits';

import {
  RuleReportLevel,
  type RuleReport,
  type RuleConfigTuple,
  type AuditReporter,
} from './types';
import { presetRules } from './rules';

interface AuditEngineConfig {
  /**
   * 是否启用 audit 分析
   */
  enable: boolean;
  /**
   * 需要执行校验的规则
   */
  rules: RuleConfigTuple[];
  /**
   * 需要执行检测的包名
   */
  project: RushConfigurationProject;
  /**
   * 格式化方案，目前仅支持 text 格式
   */
  reporter: AuditReporter;
}
const noop = () => {
  // do nothing
};

const zip = <T extends object>(obj: T): Partial<T> =>
  Object.keys(obj).reduce((acc, k) => {
    const v = obj[k];
    if (
      // 空对象
      typeof v === 'undefined' ||
      // 空数组
      (Array.isArray(v) && v.length === 0)
    ) {
      return acc;
    }
    return { ...acc, [k]: v };
  }, {});

export class AuditEngine {
  private options: AuditEngineConfig;
  constructor(options: Partial<AuditEngineConfig>) {
    this.options = Object.assign(
      {
        reporter: noop,
        enable: true,
        rules: presetRules.map(r => [r.name, RuleReportLevel.ERROR]),
      },
      zip(options),
    ) as AuditEngineConfig;
    if (!this.options.project) {
      throw new Error('Should provide valid project definition.');
    }
  }

  async run() {
    const { enable, rules, project } = this.options;
    if (!enable) {
      return [];
    }
    const ruleFuncs = rules.map(([name, reportLevel, extractConfig]) => {
      const presetRule = presetRules.find(i => i.name === name);
      if (!presetRule) {
        throw new Error(
          `Can not find preset rule according to this name: ${name}`,
        );
      }
      return { ...presetRule, level: reportLevel, extractConfig };
    });
    const { packageName } = project;
    const res = (
      await Promise.all(
        ruleFuncs.map(async r => {
          // @ts-expect-error fix me late
          const result = await r.fn(project, r.extractConfig);
          return result.map(d => ({
            ...d,
            level: r.level || RuleReportLevel.ERROR,
            rule: r.name,
            packageName,
          })) as RuleReport[];
        }),
      )
    ).flat();
    this.report(res);
    return res;
  }

  private report(reportRecords: RuleReport[]) {
    const { reporter } = this.options;
    reporter(reportRecords);
  }
}
