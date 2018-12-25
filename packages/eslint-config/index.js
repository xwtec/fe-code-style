module.exports = {
  root: true,
  parser: require.resolve('babel-eslint'),
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    './rules/index.js',
    './rules/semi.js'
  ].map(require.resolve)
}