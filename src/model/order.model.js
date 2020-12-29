const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: String,
    orderStatus: String,
    address: Object,
    totalPrice: Number,
    products: Array,
    createDateTime: Number,
    completeDateTime: Number,
    user: String,
});

const order = mongoose.model('order', orderSchema, 'order');
module.exports = order;
