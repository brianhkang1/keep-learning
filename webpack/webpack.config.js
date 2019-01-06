const path = require('path') //from Node.js

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/  //use babel-loader on any JS file
      }
    ]
  }
}

module.exports = config
