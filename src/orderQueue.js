class OrderQueue {
  constructor() {
    this.orderQueue = [];
  }
  isEmpty() {
    return !this.orderQueue || this.orderQueue.length <= 0;
  }
  push(order) {
    this.orderQueue.push(order);
  }
  shift() {
    return this.orderQueue.shift();
  }
  first() {
    return this.isEmpty() ? null : this.orderQueue[0];
  }
  clean() {
    this.orderQueue.length = 0;
  }
  size() {
    return this.orderQueue.length;
  }
}

module.exports.orderQueue = new OrderQueue();
