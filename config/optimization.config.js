var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/optimization.config.js');

var env = process.env.IONIC_ENV;

useDefaultConfig[env].resolve.alias = {
  "@models": path.resolve('./src/models/'),
  "@components": path.resolve('./src/components/'),
  "@directives": path.resolve('./src/directives/'),
  "@providers": path.resolve('./src/providers/'),
  "@pipes": path.resolve('./src/pipes/'),
  "@app/env": path.resolve(environmentPath(env)),
  "@app/config": path.resolve('./src/config/config')
};

function environmentPath(env) {
  var filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};
