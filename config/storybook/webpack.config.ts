import path from 'node:path';

import webpack, { RuleSetRule } from 'webpack';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(path.resolve(__dirname, '../../src'));

  config.module.rules.push(buildStyleLoader(true));

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push(buildSvgLoader());

  config.plugins.push(new webpack.DefinePlugin({
    __DEV__: true
  }));

  return config;
}
