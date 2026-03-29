const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/vertical-slider-card.ts',
    output: {
      filename: 'vertical-slider-card.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      minimize: isProduction,
    },
    devtool: isProduction ? false : 'source-map',
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      hot: false,
      liveReload: true,
    },
  };
};
