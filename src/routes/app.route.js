const config = require('../../lib/config').config
var express = require('express');

module.exports = function (app) {
    const moveBaseController = require('../controller/moveBase/MoveBaseController');

    app.route('/api/setTargetPose').post(moveBaseController.setTargetPose);
    app.route('/api/testApi').get(function (req, res) {
        return res.json({
            message: 'test 123 sccuess',
            status: 200,
        })
    });
    app.route('/api/testJenkins').get(function (req, res) {
        return res.json({
            message: 'test jenkins success 12345',
            status: 200,
        })
    });
};
