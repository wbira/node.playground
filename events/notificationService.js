function notifyAboutOrder(order){
    console.log(`Created new order with id ${order.id} and items id: ${order.items.map((v) => v.id)}`)
}

module.exports.onOrderCreated = notifyAboutOrder;