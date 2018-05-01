const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    exchange: String,
    pair: { currency1: String, currency2: String, } ,
    price: Number,
    quantity: Number,
    type: String,
    date: Date,
    createdAt: { type: Date, default: Date.now },
});

const TradeModel = mongoose.model('Trade', tradeSchema);
module.exports = TradeModel;