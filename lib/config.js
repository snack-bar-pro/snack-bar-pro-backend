const ros = require('../roslibjs_init')
const mongoose = require('../src/util/mongoose.util')
const config = {}

module.exports.init = async () => {
    config.ros = ros.init()
    config.mongoose = await mongoose.connect()
}

module.exports.config = config;
