const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    'zlib': require.resolve('browserify-zlib')
  })
);
