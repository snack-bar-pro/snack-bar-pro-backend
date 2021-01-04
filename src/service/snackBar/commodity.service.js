const commodityRepository = require('../../repository/snackBar/commodity.repository')
const moment = require('moment')

const findAll = async (page, limit) => {
  return await commodityRepository.findAllCommodity(page, limit)
}

const findById = async (id) => {
  return await commodityRepository.findCommodityById(id)
}

const delById = async (id) => {
  return await commodityRepository.delCommodity(id)
}

const save = async (commodity) => {
  return await commodityRepository.saveCommodity(commodity)
}

const update = async (commodity) => {
  return await commodityRepository.updateCommodity(commodity)
}

module.exports = {
  findAll,
  findById,
  delById,
  save,
  update
}
