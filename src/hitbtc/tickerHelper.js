const ExchangeHelper = require('./exchangeHelper');
const TickerModel = require('../db').TickerModel;

class TickerHelper extends ExchangeHelper {
    get schema() {
        return {
            type: 'object',
            required: ['max_bid', 'min_ask', 'volume'],
            properties: {
                high: {
                    type: 'string',
                    numberString: true
                },
                low: {
                    type: 'string',
                    numberString: true
                },
                volume: {
                    type: 'string',
                    numberString: true
                },
                last: {
                    type: 'string',
                    numberString: true
                }
            }
        }
    }

    get uri() {
        return 'ticker';
    }

    _processResponce(responce) {
        const obj = super._processResponce(responce);
        const ticker = new TickerModel({
            exchange: this.exchange,
            pair: {
                currency1: this.currency1,
                currency2: this.currency2,
            },
            maxBid: parseFloat(obj.high),
            minAsk: parseFloat(obj.low),
            volume: parseFloat(obj.volume),
        });
        // ticker.save().then(() => {

        // }, (err) => {

        // });
    }
}

module.exports = TickerHelper;