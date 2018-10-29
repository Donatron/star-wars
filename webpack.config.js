modeul.exports = {
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react', 'es2015', 'stage-1'
          ]
        }
      }
    ]
  }
}