'use strict'

module.exports = {
  name: 'restify example',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    uri:
      'mongodb://sa:douglas01@dougtq-shard-00-00-nkzpm.mongodb.net:27017,dougtq-shard-00-01-nkzpm.mongodb.net:27017,dougtq-shard-00-02-nkzpm.mongodb.net:27017/test?ssl=true&replicaSet=dougtq-shard-0&authSource=admin'
  }
}
