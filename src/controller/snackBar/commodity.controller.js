const commodityService = require('../../service/snackBar/commodity.service')

const findAll = async (req, res) => {
  const {page, limit} = req.param
  try{
    const result = await commodityService.findAll(page, limit)
    return res.json({
      status: 200,
      data: result
    })
  }catch (e) {
    return res.json({
      status: 500,
      message: `Find all commodity error cause ${e.message}`
    })
  }
}

const findById = async (req, res) => {
  const {id} = req.param
  try{
    const result = await commodityService.findById(id)
    return res.json({
      status: 200,
      data: result
    })
  }catch (e) {
    return res.json({
      status: 500,
      message: `Find commodity ${id} error cause ${e.message}`
    })
  }
}

const delCommodity = async (req, res) => {
  const {id} = req.param
  try{
    await commodityService.delById(id)
    return res.json({
      status: 200,
      message: `delete commodity ${id} success`
    })
  }catch (e) {
    return res.json({
      status: 500,
      message: `Delete commodity ${id} error cause ${e.message}`
    })
  }
}

const saveCommodity = async (req, res) => {
  const commodity = req.body
  try{
    await commodityService.save(commodity)
    return res.json({
      status: 200,
      message: 'Save commodity success'
    })
  }catch (e) {
    return res.json({
      status: 500,
      message: `Save commodity error cause ${e.message}`
    })
  }
}

const updateCommodity = async (req, res) => {
  const commodity = req.body
  try{
    await commodityService.update(commodity)
    return res.json({
      status: 200,
      message: 'Update commodity success'
    })
  }catch (e) {
    return res.json({
      status: 500,
      message: `Update commodity error cause ${e.message}`
    })
  }
}

const updateCommodityImage = async (req, res) => {
  return res.json({
    status: 200,
    message: 'Upload image success!'
  })
}

module.exports = {
  findAll,
  findById,
  delCommodity,
  saveCommodity,
  updateCommodity,
  updateCommodityImage
}
