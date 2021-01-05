const orderService = require('../../service/snackBar/order.service');
const { orderQueue } = require('../../orderQueue');
const moveBaseService = require('../../service/ros/moveBase.service');
const { setAtHome } = require('../../data/MoveBaseResult');
const { decode } = require('../../util/jwt.util');

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
    const token = req.headers.authorization;
    const openid = decode(token).openid;
    let order = await orderService.searchOrder({...req.query, openid});
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

  
const handleOrder = async (req, res) => {
  let order = req.body;
  const token = req.headers.authorization;
  order.openid = decode(token).openid;
  try {
    order = await orderService.createNewOrder(order);
    if (orderQueue.isEmpty()) {
      await orderService.updateOrderStatus('processing', order);
      moveBaseService.setTargetPoseGoal(order.address);
      setAtHome(false);
    }
    orderQueue.push(order);
    return res.status(200).json(order);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const cleanOrderInQueue = (req, res) => {
  try {
    const size = orderQueue.size();
    orderQueue.clean();
    return res.status(200).json({message: `clean ${size} orders`});
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const cleanOrderInDbByStatus = async (req, res) => {
  try {
    const status = req.query.status;
    if (status) {
      await orderService.deleteOrderByStatus(status);
    }
    return res.status(200).json({message: `clean ${status} orders in DB`});
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = {
    createNewOrder,
    findOrder,
    findOrderById,
    updateOrder,
    handleOrder,
    cleanOrderInQueue,
    cleanOrderInDbByStatus
};
