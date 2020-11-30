const ros = require('../roslibjs_init')

const config = {}

module.exports.init = () => {
    config.ros = ros.init()
}

module.exports.config = config;
