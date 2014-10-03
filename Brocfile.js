/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/snap.svg/dist/snap.svg-min.js');

module.exports = app.toTree();
