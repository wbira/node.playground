var bus = require('servicebus').bus();

function init(eventName) {
    bus.subscribe(eventName, function (data) {
        sendDeliveryRequest(data)
    });
}

function sendDeliveryRequest(order){
    console.log(`Send delivery request for order id ${order.id} and items id: $ {order.items.map((v) => v.id)}`)
}

module.exports.init = init;