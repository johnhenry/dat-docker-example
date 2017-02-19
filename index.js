var path = require('path')
var http = require('http')
var mkdirp = require('mkdirp')
var createStatic = require('st')
var createDat = require('dat-node')

var config = require('./config')
var dir = path.join(__dirname, config.dir)
mkdirp.sync(dir)

var st = createStatic({
  path: dir,
  url: '/',
  index: 'index.html',
  dot: true,
  cors: true,
  cache: false
})

createDat(dir, config, function (err, dat) {
  network = dat.joinNetwork(config)

  http.createServer(function (req, res) {
    if (req.url === '/.well-known/dat') {
      return res.end('dat://' + config.key + '/\nTTL=3600')
    } else {
      st(req, res)
    }
  }).listen(3000)
})
