module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    './rules/index.js',
    './rules/no-semi.js'
  ]
}