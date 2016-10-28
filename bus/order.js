const { inherits } = require('util')
var bus = require('servicebus').bus();

function Order() {
    this.orderCreatedEvent = 'orderCreated'
}

function createNewOrder() {
    console.log("Creating new order...")
    //some fake logic
    var promise = new Promise((resolve, reject) => {
        setInterval(() => {
            var orderData = { id: 'xxx', items: [{ id: 'i1' }, { id: 'i2' }] };
            resolve(orderData);
        }, 2000)
    });

    return promise
}

Order.prototype.create = function create() {
    createNewOrder().then((orderData) => { bus.publish(this.orderCreatedEvent, orderData) })
        .catch(console.error)
}

module.exports.Order = new Order();
