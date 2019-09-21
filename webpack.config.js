const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';
  return {
    mode: argv.mode,
    entry: path.resolve(`${__dirname}/src/start.ts`),
    output: {
      path: path.resolve(`${__dirname}/dist`),
      filename: 'start.js',
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',

    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(`${__dirname}`),
        '@shared': path.resolve(`${__dirname}/src/shared`),
        '@express/*': path.resolve(`${__dirname}/src/express/*`),
        '@server': path.resolve(`${__dirname}/src/express/Server`),
        '@services/*': path.resolve(`${__dirname}/src/services/*`),
        '@entities/*': path.resolve(`${__dirname}/src/services/entities/*`),
        '@usecases/*': path.resolve(`${__dirname}/src/services/usecases/*`),
        '@presenters/*': path.resolve(`${__dirname}/src/services/presenters/*`),
        '@contorollers/*': path.resolve(`${__dirname}/src/services/contorollers/*`),
        '@repositories/*': path.resolve(`${__dirname}/src/services/repositories/*`),
      },
    },
    target: 'node',
    externals: [nodeExternals()],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true }
          }
        })
      ],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        },
      ],
    },
  }
};
