let Rest = require('restify')
let restful = Rest.createServer()

restful.get({ path: '/hello/:id', version: '1.0.0' }, (req, res, next) => {
  res.send(205, 'Chegou ' + req.params.id)
  next(false)
})

restful.listen(3000, () => {
  console.log('Servidor Restify: %s rodando em %s', restful.name, restful.url)
})
