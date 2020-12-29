const ros = require('../roslibjs_init');
const _ = require('loadsh');
const config = {};

module.exports.init = () => {
   config.ros = ros.init();
};

module.exports.config = config;
