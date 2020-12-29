const express = require('./express')
const config = require('./lib/config')
const mongodb = require('./mongo_init')
const mongoose = require('./src/util/mongoose.util')

async function initDb (){
  // await mongodb.connect();
  const db = await mongoose.connect();
  return db;
}
module.exports.init = async () => {
  await config.init();
  // const app = await initDb();
  const app = express.init();
  console.log('Server running in Port: 3001')
  app.listen(3001)
}
