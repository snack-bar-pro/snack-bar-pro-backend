const Order = require('../../model/order.model');

const saveOrder = order => {
    let newOrder = new Order({
        position: order.position,
        createAt: order.createAt,
        finishedAt: order.finishedAt,
        user: 'admin',
    });
    return newOrder.save();
};
const findOrder = () => {
    return Order.find({'user': 'admin'}).lean();
};

module.exports = {
    saveOrder,
    findOrder,
};
