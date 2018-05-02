const mongoose = require('mongoose');

const url = 'mongodb://localhost/test';

mongoose.connect(url)
    .then(() => {
        console.log('connected!');
    }, (err) => {
        console.error(err);
    })

const OrderModel = require('./order');
const TickerModel = require('./ticker');
const TradeModel = require('./trade');

module.exports = {
    OrderModel: OrderModel,
    TickerModel: TickerModel,
    TradeModel: TradeModel
};