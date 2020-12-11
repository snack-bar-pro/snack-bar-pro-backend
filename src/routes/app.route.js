const config = require('../../lib/config').config
var express = require('express');

const moveBaseController = require('../controller/moveBase/MoveBaseController');


module.exports = function (app) {
    app.route('/api/setTargetPose').post(moveBaseController.setTargetPose);
    app.route('/api/testApi').get(function (req, res) {
        return res.json({
            message: 'test 123 sccuess',
            status: 200,
        })
    });
    app.route('/api/testJenkins').get(function (req, res) {
        return res.json({
            message: 'test jenkins sccuess',
            status: 200,
        })
    });
};
