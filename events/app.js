const {Order} = require('./order.js')
const notificationService = require('./notification.js');

Order.on('done', (orderData) => {
    notificationService.notifyAboutOrder(orderData);
});


Order.create();