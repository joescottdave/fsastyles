const path = require('path')

// Plugins
const SvgStorePlugin = require('external-svg-sprite-loader')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  // context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /(component|styleguide|helper)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1, url: false }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ['file-loader?name=[path][name].[ext]', 'image-webpack-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: SvgStorePlugin.loader,
            options: {
              name: 'sprite.svg',
              iconName: '[name]'
            }
          },
          'svgo-loader'
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = (env, argv) => {
  config.plugins = []

  config.plugins = [
    ...config.plugins,

    // Extract CSS to its own file
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),

    // Create SVG sprite
    new SvgStorePlugin({
      sprite: {
        startX: 10,
        startY: 10,
        deltaX: 20,
        deltaY: 20,
        iconHeight: 20
      }
    })
  ]

  return config
}
