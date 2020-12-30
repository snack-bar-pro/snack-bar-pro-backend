const order = require('../../model/order.model');
const orderRepository = require('../../repository/snackBar/order.repository');
const dateUtil = require('../../util/date.util');
const _ = require('loadsh');

const createNewOrder = async order => {
    order.createDateTime = dateUtil.now();
    order.orderStatus = 'processing'
    const savedOrder = await orderRepository.saveOrder(order)
    return savedOrder
};

const findOrder = async () => {
    const orders = await orderRepository.findOrder()
    return orders.map(n => formatCreateDateTime(n))
};

const findOrderById = async (id) => {
    const orders = await orderRepository.findOrderById(id)
    formatCreateDateTime(orders)
    return orders
};

const updateOrder = async (order) => {
    const id = order._id
    delete order.createDateTime
    await orderRepository.updateOrder(order)
    return findOrderById(id)
};

function formatCreateDateTime(order) {
    const createDateTime = dateUtil.formatTimeWithTimeZone(new Date(order.createDateTime), 8, dateUtil.YYYYMMDDHHmm)
    order.createDateTime = createDateTime
    if (!_.isEmpty(order.completeDateTime)) {
        const completeDateTime = dateUtil.formatTimeWithTimeZone(new Date(order.completeDateTime), 8, dateUtil.YYYYMMDDHHmm)
        order.completeDateTime = completeDateTime
    }
    return order
}

module.exports = {
    createNewOrder,
    findOrder,
    findOrderById,
    updateOrder
};
