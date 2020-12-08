const config = require('../../lib/config').config
var express = require('express');

const moveBaseController = require('../controller/moveBase/MoveBaseController');


module.exports = function (app) {
    app.route('/api/setTargetPose').post(moveBaseController.setTargetPose);
};
