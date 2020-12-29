const orderRepository = require('../../repository/snackBar/order.repository');
const dateUtil = require('../../util/date.util');
const createNewOrder = async order => {
    let createAt = dateUtil.now()
    return await orderRepository.saveOrder(order)
};

const findOrder = async () => {
    return await orderRepository.findOrder();
};

module.exports = {
    createNewOrder,
    findOrder,
};
