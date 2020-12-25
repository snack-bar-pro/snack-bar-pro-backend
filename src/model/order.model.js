const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: String,
    position: Object,
    createAt: String,
    finishedAt: String,
    user: String,
});

const order = mongoose.model('order', orderSchema, 'order');
module.exports = order;
