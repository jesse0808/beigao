module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      'rootValue': 36,
      'unitPrecision': 5,
      'propList': ['*'],
      'selectorBlackList': ['border']
    },
    autoprefixer: {}
  }
}
