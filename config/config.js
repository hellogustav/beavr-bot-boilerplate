var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

if (!process.env.IS_HEROKU) {
  var dotenv = require('dotenv').config({path: rootPath + '/.env'});
}

var config = {
  root: rootPath,
  app: {
    name: 'chatbot'
  },
  env: process.env.ENV || '',
  port: process.env.PORT || '',
  database_url: process.env.DATABASE_URL || '',
  page_access_token: process.env.PAGE_ACCESS_TOKEN || '',
  verify_token: process.env.VERIFY_TOKEN || ''
};

module.exports = config;
