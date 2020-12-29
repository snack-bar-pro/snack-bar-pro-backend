const config = require('../../lib/config').config
var express = require('express');

module.exports = function (app) {
    const moveBaseController = require('../controller/ros/moveBase.controller');
    const orderController = require('../controller/snackBar/order.controller');
    const commodityController = require('../controller/snackBar/commodity.controller');
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
    //order
    app.route('/api/orders').post(orderController.createNewOrder);
    app.route('/api/orders').get(orderController.findOrder);
    //commodity
    app.route('/api/commodity/:id').get(commodityController.findById)
    app.route('/api/commodity/:id').delete(commodityController.delCommodity)
    app.route('/api/commodity').get(commodityController.findAll)
    app.route('/api/commodity').post(commodityController.saveCommodity)
    app.route('/api/commodity').put(commodityController.updateCommodity)
};
