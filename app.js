const Graber = require('./src/livecoin/graber');

var graber = new Graber();

// graber.getOrders()
// graber.getTickers()
graber.getTrades()
.then((t) => {

})
.catch((err) => {
    throw err;
});
