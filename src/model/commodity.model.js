const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commoditySchema = new Schema({
  id: String,
  price: Number,
  title: String,
  desc: String,
  thumb: String,
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true})

const commodity = mongoose.model('commodity', commoditySchema, 'commodity');
module.exports = commodity
