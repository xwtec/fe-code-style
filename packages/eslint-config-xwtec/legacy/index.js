module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'airbnb-base/legacy',
    '../rules/index.js',
    '../rules/semi.js'
  ]
}