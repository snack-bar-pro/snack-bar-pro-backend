const express = require('./express')
const config = require('./lib/config')


module.exports.init = () => {
  const app = express.init();
  config.init()
  console.log('Server running in Port: 3001')
  app.listen(3001)
}
