const { inherits } = require('util')
const { EventEmitter } = require('events')

function Order() {
    if (!(this instanceof Order)) return new Order();

    EventEmitter.call(this);
}

function createNewOrder() {
    var promise = new Promise((resolve, reject) => {
        setInterval(() => {
            var orderData = { id: 'xxx', items: [{}, {}] };
            resolve(orderData);
        }, 1000)
    });

    return promise
}

Order.prototype.processOrder = function process(data) {
    createNewOrder().then((orderData) => this.emit('done', orderData)).catch((err) => this.emit('fail', err))
}

inherits(Order, EventEmitter)

moudule.exports = Order;
