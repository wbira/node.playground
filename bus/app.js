const {Order} = require('./order.js')
const notificationService = require('./notificationService.js');
const deliveryService = require('./deliveryService.js');

notificationService.init(Order.orderCreatedEvent)
deliveryService.init(Order.orderCreatedEvent)

Order.create();