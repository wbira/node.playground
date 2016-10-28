const {Order} = require('./order.js')
const notificationService = require('./notificationService.js');
const deliveryService = require('./deliveryService.js');

const orderCreatedEventName = 'orderCreated';
var orderCreatedListeners = [];

var EventManager = function(){}

EventManager.prototype.init = function init(emitter) {
    emitter.on(orderCreatedEventName, (orderData) => {
        orderCreatedListeners.forEach((listener) => {
            listener.onOrderCreated(orderData);
        })
    })
    this.registerListener(orderCreatedEventName, notificationService)
    this.registerListener(orderCreatedEventName, deliveryService)
}

EventManager.prototype.registerListener = function registerListener(event, listener) {
    if (event === orderCreatedEventName) {
        orderCreatedListeners.push(listener)
    } else {
        console.error("Event is unhandled...")
    }
}

module.exports.EventManager = new EventManager()