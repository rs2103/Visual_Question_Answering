const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "fs": false,    // No 'fs' in front-end
      "net": false,   // No 'net' in front-end
      "tls": false    // No 'tls' in front-end
    }
  },
  // Other Webpack configurations...
};
