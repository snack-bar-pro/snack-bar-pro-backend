class OrderQueue {
  constructor() {
    this.orderQueue = [];
  }
  isEmpty() {
    return !order || order.length <= 0;
  }
  push() {
    this.orderQueue.push(order);
  }
  shift() {
    return this.orderQueue.shift();
  }
  first() {
    return this.isEmpty() ? null : this.orderQueue[0];
  }
}

module.exports.orderQueue = new OrderQueue();
