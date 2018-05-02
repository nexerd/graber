const BaseGraber = require('./src/baseGraber');
//const Graber = require('./src/hitbtc/graber');

// var grabers = BaseGraber.GetAllGrabers();

var graber = BaseGraber.CreateLivecoinGraber();

// graber.getOrders()
// graber.getTickers()
graber.getTickers()
// .then((t) => {

// })
// .catch((err) => {
//     throw err;
// });
