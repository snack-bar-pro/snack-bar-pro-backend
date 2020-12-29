const Commodity = require('../../model/commodity.model')

const saveCommodity = (commodity) => {
  let saveItem = new Commodity(commodity)
  return saveItem.save()
}

const findCommodityById = (id) => {
  return Commodity.findOne({id: id}).lean()
}

const findAllCommodity = (page, limit) => {
  return Commodity.find().skip(page * limit).limit(limit)
}

const delCommodity = (id) => {
  return Commodity.deleteOne({id: id})
}

const updateCommodity = (commodity) => {
  return Commodity.findOneAndUpdate({id: commodity._id}, commodity)
}

module.exports = {
  saveCommodity,
  findAllCommodity,
  findCommodityById,
  delCommodity,
  updateCommodity
}
