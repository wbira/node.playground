const OrderModule = require('./order.js');
var order = OrderModule()


order.on('done', (order) => {
    console.log(`Created new order with id ${order.id} and items id: ${order.items.map((v) => v.id)}`)
})

order.on('fail', console.error);
 
order.processOrder()