const config = require('../../lib/config').config
var express = require('express');
const path = require('path')

module.exports = function (app) {
    const moveBaseController = require('../controller/ros/moveBase.controller');
    const orderController = require('../controller/snackBar/order.controller');
    const commodityController = require('../controller/snackBar/commodity.controller');
    app.route('/api/setTargetPose').post(moveBaseController.setTargetPose);
    app.route('/api/move_base/result').get(moveBaseController.getMoveBaseStatus);
    // app.route('/api/move_base/reached').post(moveBaseController.setMoveBaseStatus);
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
    app.route('/api/orders/:id').get(orderController.findOrderById);
    app.route('/api/orders').put(orderController.updateOrder);
    //commodity
    app.route('/api/commodity/:id').get(commodityController.findById)
    app.route('/api/commodity/:id').delete(commodityController.delCommodity)
    app.route('/api/commodity').get(commodityController.findAll)
    app.route('/api/commodity').post(commodityController.saveCommodity)
    app.route('/api/commodity').put(commodityController.updateCommodity)
    //static file
    app.use('/static', express.static('public'))
};
