const fs = require('fs-extra');
const path = require('path');
const fork = require('child_process').fork;

const SCRIPTS_DIR = __dirname;
const DIST_DIR = path.resolve(__dirname, '..', 'dist');


fs.removeSync(DIST_DIR);


[

  'build-cli.js',
  'build-compiler.js',
  'build-renderer-vdom.js',
  'build-server.js',
  'build-submodules.js',
  'build-sys-node',
  'build-testing.js'

].forEach(script => fork(path.join(SCRIPTS_DIR, script)));

