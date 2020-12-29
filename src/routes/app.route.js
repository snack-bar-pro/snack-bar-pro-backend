const config = require('../../lib/config').config
var express = require('express');

module.exports = function (app) {
    const moveBaseController = require('../controller/ros/moveBase.controller');
    const orderController = require('../controller/snackBar/order.controller');
    app.route('/api/setTargetPose').post(moveBaseController.setTargetPose);
    app.route('/api/move_base/result').get(moveBaseController.getMoveBaseStatus);
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
    app.route('/api/orders').post(orderController.createNewOrder);
    app.route('/api/orders').get(orderController.findOrder);
    app.route('/api/orders/:id').get(orderController.findOrderById);
    app.route('/api/orders').put(orderController.updateOrder);
};
