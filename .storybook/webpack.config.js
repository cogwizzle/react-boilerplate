const path = require("path");

module.exports = ({ config, mode }) => {
  // Excluding existing CSS rules in the default storybook webpack config.
  const isTestToBeExcluded = (test) => (test.source == '\\.css$' || test.source == '\\.module\\.css$');
  const excludedTest = config.module.rules.filter(({ test }) => isTestToBeExcluded(test));
  config.module.rules = config.module.rules.filter(({ test }) => !isTestToBeExcluded(test));

  config.module.rules.push({
    test: /.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            require('postcss-nested')
          ],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /.[t|j]s(x)?$/,
    use: [
      'ts-loader',
      {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-typescript', { allExtensions:true, isTSX: true }],
            '@babel/preset-react',
            '@babel/preset-env',
          ],
        }
      },
    ],
    exclude: /node_modules/,
  });

  return config;
};

