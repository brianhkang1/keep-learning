const path = require('path') //from Node.js

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
}

module.exports = config
