const {Order} = require('./order.js')
const {EventManager} = require('./EventManager.js')

EventManager.init(Order)
Order.create();