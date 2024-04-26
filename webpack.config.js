const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shaw_utils.js',
    library: {
      name: 'shaw_utils',
      type: 'umd',
    }
  },
};