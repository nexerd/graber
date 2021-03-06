const ExchangeHelper = require('./exchangeHelper');
const TickerModel = require('../db').TickerModel;

class TickerHelper extends ExchangeHelper {
    get schema() {
        return {
            type: 'object',
            required: ['max_bid', 'min_ask', 'volume'],
            properties: {
                max_bid: {
                    type: 'number'
                },
                min_ask: {
                    type: 'number'
                },
                volume: {
                    type: 'number'
                },
                last: {
                    type: 'number'
                }
            }
        }
    }

    get uri() {
        return 'exchange/ticker';
    }

    _processResponce(responce) {
        const obj = super._processResponce(responce);
        const ticker = new TickerModel({
            exchange: this.exchange,
            pair: {
                currency1: this.currency1,
                currency2: this.currency2,
            },
            low: obj.low,
            high: obj.high,
            volume: obj.volume,
        });
        return ticker.save().then(() => {

        }, (err) => {

        });
    }
}

module.exports = TickerHelper;