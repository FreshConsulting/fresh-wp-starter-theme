const baseConfig = require('./base.config.js');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',
    watch: true,
    plugins: [
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        files: [
          './*.php',
          './js/*.js'
        ],
        proxy: 'http://local.wp.test/',// change this to your current URL
        notify: true
      })
    ]
  },
);
