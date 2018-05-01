const _ = require('lodash');

const BaseHelper = require('./baseHelper');
const OrderModel = require('../db').OrderModel;

class OrderHelper extends BaseHelper {

    get schema() {
        return {
            type: 'object',
            required: ['timestamp', 'asks', 'bids'],
            properties: {
                timestamp: {
                    type: 'number'
                },
                asks: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: {
                            type: 'string',
                            numberString: true,
                            maxItems: 2,
                            minItems: 2
                        }
                    },
                },
                bids: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: {
                            type: 'string',
                            numberString: true,
                            maxItems: 2,
                            minItems: 2
                        }
                    },
                }
            }
        }
    }
    _processResponce(responce) {
        const obj = super._processResponce(responce);

        const buf = _.concat(_.map(obj.asks, (r) => {
            r.type = 'aks';
            return r;
        }), _.map(obj.bids, (r) => {
            r.type = 'bid';
            return r;
        }));

        _.forEach(buf, (r) => {
            const order = new OrderModel({
                exchange: this.exchange,
                pair: {
                    currency1: this.currency1,
                    currency2: this.currency2,
                },
                price: parseFloat(r[0]),
                quantity: parseFloat(r[1]),
                type: r.type,
                date: new Date(obj.timestamp)
            });
            // order.save().then(() => {

            // }, (err) => {

            // });
        });
    }

    get uri() {
        return 'exchange/order_book';
    }
}

module.exports = OrderHelper;