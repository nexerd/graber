const BaseHelper = require('./baseHelper');
const TickerModel = require('../db').TickerModel;

class TickerHelper extends BaseHelper {
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
                currency2: this.currency1,
            },
            maxBid: obj.max_bid,
            minAsk: obj.min_ask,
            volume: obj.volume,
        });
        // ticker.save().then(() => {

        // }, (err) => {

        // });
    }
}

module.exports = TickerHelper;