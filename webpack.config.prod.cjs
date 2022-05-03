const path = require('path');

module.exports = {
  entry: {
    'mindar-image': './src/image-target/index.js',
    'mindar-image-aframe': './src/image-target/aframe.js',
    'mindar-image-three': './src/image-target/three.js',
    'mindar-face': './src/face-target/index.js',
    'mindar-face-aframe': './src/face-target/aframe.js',
    'mindar-face-three': './src/face-target/three.js',
  },
  mode: 'production',
  output: {
    filename: '[name].prod.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false,
    },
  },
};
