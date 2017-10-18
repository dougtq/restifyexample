require('dotenv').config()
let Rest = require('restify')
let Mongodb = require('mongodb').MongoClient
let config = require('./config')
let restful = Rest.createServer({
  name: config.name,
  version: config.version
})

restful.use(Rest.plugins.jsonBodyParser({ mapParams: true }))
restful.use(Rest.plugins.acceptParser(restful.acceptable))
restful.use(Rest.plugins.queryParser({ mapParams: true }))
restful.use(Rest.plugins.fullResponse())

restful.get({ path: '/hello/:id', version: '1.0.0' }, (req, res, next) => {
  res.send(205, 'Chegou ' + req.params.id)
  next(false)
})

restful.listen(config.port, () => {
  Mongodb.connect(config.db.uri, (err, db) => {
    if (err) {
      console.log('Um erro ocorreu ao tentar conectar-se ao servidor', err)
      process.exit(1)
    }

    console.log(
      '%s v%s pronto para aceitar conexões na porta %s em %s env.',
      restful.name,
      config.version,
      config.port,
      config.env
    )

    require('./src/routes')({ db, restful })
  })
  console.log('Servidor Restify: %s rodando em %s', restful.name, restful.url)
})
