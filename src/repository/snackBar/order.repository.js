const Order = require('../../model/order.model');

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

module.exports = {
    saveOrder,
    findOrder,
};
