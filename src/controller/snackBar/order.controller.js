const orderService = require('../../service/snackBar/order.service');

const createNewOrder = async (req, res) => {
  let order = req.body;
  try {
      order = await orderService.createNewOrder(order);
      return res.json({
          status: 200,
          message: 'created new order.',
      });
  }catch (e) {
      return res.json({
          status: 500,
          message: e.message,
      });
  }
};
const findOrder = async (req, res) => {
  try {
      let order = await orderService.findOrder();
      return res.json({
          status: 200,
          data: order,
      });
  }catch (e) {
      return res.json({
          status: 500,
          message: e.message,
      });
  }
};
module.exports = {
    createNewOrder,
    findOrder,
};
