const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: 'style!less!css'
      }
    ]
  },
  externals: {
    
  },
  plugins: [
    
  ],
  optimization: {
    minimize: true,
  }
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-label-edit.min.js',
      libraryTarget: 'window',
      library: 'LabelEdit',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/LabelEdit.vue'),
    output: {
      filename: 'vue-label-edit.js',
      libraryTarget: 'umd',
      library: 'vue-label-edit',
      umdNamedDefine: true
    }
  })
];