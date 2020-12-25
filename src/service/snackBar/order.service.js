const orderRepository = require('../../repository/snackBar/order.repository');
const dateUtil = require('../../util/date.util');
const createNewOrder = async order => {
    let createAt = 'aaa';
    let position = order.position;
    return await orderRepository.saveOrder({position: position, createAt: createAt, finished: ''});
};

const findOrder = async () => {
    return await orderRepository.findOrder();
};

module.exports = {
    createNewOrder,
    findOrder,
};
