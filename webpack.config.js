const path = require('path')

// Plugins
const ExtractCSSPlugin = require('extract-text-webpack-plugin')
const SpritePlugin = require('svg-sprite-loader/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')

var config = {
  // context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(component|styleguide|helper)/,
        use: ExtractCSSPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            'postcss-loader'
          ]
        })
      },
      /* {
        test: /\.css$/,
        include: /(component|helper)/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      }, */
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: { extract: true }
          },
          'svgo-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
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
    new ExtractCSSPlugin({
      filename: '[name].css'
    }),

    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),

    // Create SVG sprite
    new SpritePlugin()

  ]

  return config
}
