const express = require('./express')
const config = require('./lib/config')


module.exports.init = () => {
  config.init();
  const app = express.init();
  console.log('Server running in Port: 3001')
  app.listen(3001)
}
