const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

const OrderModel = require('./order');
const TickerModel = require('./ticker');
const TradeModel = require('./trade');

module.exports = {
    OrderModel: OrderModel,
    TickerModel: TickerModel,
    TradeModel: TradeModel
};