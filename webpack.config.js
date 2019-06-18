
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app/global.js',
  devtool: 'eval-cheap-module-source-map', // << change to 'source-map' in production
  devServer: {
     contentBase: './dist',
     proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  node: {
    fs: 'empty' // surpresses errors re: the `fs` node module
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          }, //3. Inject styles into DOM
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, //2. Turns css into commonjs
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          } //1. Turns sass into css
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
            // On development we want to see where the file is coming from, hence we preserve the [path]
              name: '[path][name].[ext]?hash=[hash:20]',
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}