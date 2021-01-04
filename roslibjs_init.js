const ROSLIB = require('roslib');
const config = require('./lib/config');
const { orderQueue } = require('./src/orderQueue');
const { eventEmitter } = require('./src/eventBus');
const orderService = require('./src/service/snackBar/order.service');
const { setReached, setAtHome, getAtHome } = require('./src/data/MoveBaseResult');

const homePosition = {
  position: {
    x: 0.0884503321905,
    y: 0.028505974591,
    z: 0.0
  },
  orientation: {
    x: 0.0,
    y: 0.0,
    z: 0.00310461688896,
    w: 0.999995180665
  }
};

module.exports.init = () => {
    console.log('=======init ros==========')
    const ros = new ROSLIB.Ros({
        //rosbridge
        url : 'ws://172.17.25.199:9090'
    });

    ros.on('connection', function() {
        console.log('Connected to websocket server.');
    });

    ros.on('error', function(error) {
        console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function() {
        console.log('Connection to websocket server closed.');
        config.ros = undefined;
    });

    const listener = new ROSLIB.Topic({
        ros : ros,
        name : '/move_base/result',
        messageType : 'move_base_msgs/MoveBaseActionResult'
    });

    listener.subscribe(async (message) => {
        console.log('Received message on ' + listener.name + ': ' + JSON.stringify(message));
        try {
          if (message.status.status === 2) {
            return;
          }
          const currentOrder = orderQueue.shift();
          const isReached = message.status.status === 3;
          currentOrder && await orderService.updateOrderStatus(isReached ? 'reached' : 'error', currentOrder);
          isReached && setReached(true);
          
          setTimeout(async () => {
            currentOrder && isReached && await orderService.updateOrderStatus('completed', currentOrder);
            const nextOrder = orderQueue.first();
            if (nextOrder) {
              await orderService.updateOrderStatus("processing", nextOrder);
              eventEmitter.emit('setTargetPoseEvent', nextOrder.address);
              setAtHome(false);
            } else if (!getAtHome()) {
              eventEmitter.emit('setTargetPoseEvent', homePosition);
              setAtHome(true);
            }
          }, 10000);
        } catch (e) {
          console.log(e.message);
        }
    });

    // https://blog.csdn.net/Draonly/article/details/103292502

    return ros;
}


