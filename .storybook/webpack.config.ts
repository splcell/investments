import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';
import { BuildPaths } from '../config/build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '../src')
    };
    config.resolve?.modules?.push(paths.src);
    
    config.resolve?.extensions?.push('.js', '.ts', '.tsx');

    


    config?.module?.rules?.push(buildCssLoader(true));

    // eslint-disable-next-line no-param-reassign
    //@ts-ignore
  //   config.module?.rules = config.module.rules.map((rule: RuleSetRule) => {
  //     if (/svg/.test(rule.test as string)) {
  //         return { ...rule, exclude: /\.svg$/i };
  //     } else{
        
  //     }

  //     return rule;
  // });

  // config?.module?.rules?.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  // });
    
  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      //@ts-ignore
      if (/svg/.test(rule.test as string)) {
        //@ts-ignore
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
  }
  
  if (config && config.module && config.module.rules) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    
  }

  // if (config && config.module && config.module.rules) {
  //   config.module.rules.push({
  //     test: /\.s[ac]ss$/i,
  //     use: [
  //       "style-loader",
  //       "css-loader",
  //       {
  //         loader: "sass-loader",
  //         options: { implementation: require.resolve("sass") }
  //       },
  //     ],
  //   });



  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __PROJECT__: JSON.stringify('storybook')
    
  }))

    return config;
}


