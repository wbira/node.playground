var bus = require('servicebus').bus();

function init(eventName) {
    bus.subscribe(eventName, function (data) {
        notifyAboutOrder(data)
    });
}

function notifyAboutOrder(order) {
    console.log(`Created new order with id ${order.id} and items id: ${order.items.map((v) => v.id)}`)
}

module.exports.init = init;