function sendDeliveryRequest(order){
    console.log(`Send delivery request for order id ${order.id} and items id: ${order.items.map((v) => v.id)}`)
}

module.exports.onOrderCreated = sendDeliveryRequest;