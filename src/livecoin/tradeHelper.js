const _ = require('lodash');

const BaseHelper = require('./baseHelper');
const TradeModel = require('../db').TradeModel;

class TradeHelper extends BaseHelper {
    get schema() {
        return {
            type: 'array',
            items: {
                type: 'object',
                required: ['time', 'price', 'quantity', 'type'],
                properties: {
                    time: {
                        type: 'number'
                    },
                    price: {
                        type: 'number'
                    },
                    quantity: {
                        type: 'number'
                    },
                    type: {
                        enum: ['BUY', 'SELL']
                    }
                }
            }
        }
    }

    get uri() {
        return 'exchange/last_trades';
    }

    _processResponce(responce) {
        const obj = super._processResponce(responce);

        _.forEach(obj, (r) => {
            const trade = new TradeModel({
                exchange: this.exchange,
                pair: {
                    currency1: this.currency1,
                    currency2: this.currency2,
                },
                price: r.price,
                quantity: r.quantity,
                type: r.type.toLowerCase(),
                date: new Date(r.time * 1000)
            });
            // trade.save().then(() => {
    
            // }, (err) => {
    
            // });
        });        
    }
}

module.exports = TradeHelper;