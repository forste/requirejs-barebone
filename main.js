require.config({
    paths: {
        requireLib : 'lib/require/require'
  	},
    waitSeconds: 1000
});

console.log('loading main.js');

define(function(require) {
    var log = require('log');
    var util = require('util');
    console.log('loaded')

    log.fine('main loaded');
});
