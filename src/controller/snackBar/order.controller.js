const orderService = require('../../service/snackBar/order.service');

const createNewOrder = async (req, res) => {
  let order = req.body;
  try {
      order = await orderService.createNewOrder(order);
      return res.status(200).json(order);
  }catch (e) {
      return res.status(500).json({message: e.message});
  }
};
const findOrder = async (req, res) => {
  try {
      let order = await orderService.findOrder();
      return res.status(200).json(order);
  }catch (e) {
    return res.status(500).json({message: e.message});
  }
};
const findOrderById = async (req, res) => {
    const { id } = req.params
    try {
        let order = await orderService.findOrderById(id);
        return res.status(200).json(order);
    }catch (e) {
        return res.status(500).json({message: e.message});
    }
  };
const updateOrder = async (req, res) => {
    try {
        let order = await orderService.updateOrder(req.body);
        return res.status(200).json(order);
    }catch (e) {
        return res.status(500).json({message: e.message});
    }
  };
module.exports = {
    createNewOrder,
    findOrder,
    findOrderById,
    updateOrder
};
