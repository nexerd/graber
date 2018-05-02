const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({
    exchange: String,
    pair: { currency1: String, currency2: String, } ,
    low: Number,
    high: Number,
    volume: Number,
    last: Number,
    createdAt: { type: Date, default: Date.now }
});

const TickerModel = mongoose.model('Ticker', tickerSchema);
module.exports = TickerModel;