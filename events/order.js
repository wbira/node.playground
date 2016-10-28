const { inherits } = require('util')
const { EventEmitter } = require('events')

function Order() {
    if (!(this instanceof Order)) return new Order();

    EventEmitter.call(this);
}

function createNewOrder() {
    console.log("Creating new order...")
    //some fake logic
    var promise = new Promise((resolve, reject) => {
        setInterval(() => {
            var orderData = { id: 'xxx', items: [{id: 'i1'}, {id: 'i2'}] };
            resolve(orderData);
        }, 2000)
    });

    return promise
}

Order.prototype.create = function create() {
    createNewOrder().then((orderData) => this.emit('done', orderData))
                    .catch((err) => this.emit('fail', err))
}

inherits(Order, EventEmitter);

module.exports.Order = Order();
