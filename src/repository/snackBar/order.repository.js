const Order = require('../../model/order.model');
const mongoose = require('mongoose');

const saveOrder = order => {
    let newOrder = new Order({
        ...order,
        user: 'admin'
    });
    return newOrder.save();
};
const findOrder = () => {
    return Order.find({'user': 'admin'}).lean();
};
const findOrderById = (id) => {
    const objectId = mongoose.Types.ObjectId(id)
    return Order.find({'_id': objectId}).lean();
};
const updateOrder = (order) => {
    const id = order._id;
    delete order._id;
    return Order.update({'_id': id}, order);
};

module.exports = {
    saveOrder,
    findOrder,
    findOrderById,
    updateOrder
};
