const Ajv = require('ajv');
const rp = require('request-promise');

const ajv = new Ajv({ allErrors: true, jsonPointers: true });

ajv.addKeyword('numberString', {
    type: 'string',
    compile: function (sch) {
        if (!sch) { return function () { return true; } }
        return function (data) {
            const num = parseFloat(data);
            return num === num;
        }
    }
});

class BaseHelper {
    constructor(url, currency1, currency2) {
        this.url = url;
        this.currency1 = currency1;
        this.currency2 = currency2;
        this.pair = this._createCurrencyPair(currency1, currency2);
    }

    get exchange() {
        return 'livecoin.net';
    }

    get schema() {
        return {};
    }

    get uri() {
        return 'exchange/order_book';
    }

    _createCurrencyPair(currency1, currency2) {
        return `${currency1}/${currency2}`;
    }

    _createRequestUrl(fisrtCurrency) {
        return `${this.url}/${this.uri}?currencyPair=${this.pair}`
    }

    _validateResponce(responce) {
        var validate = ajv.compile(this.schema);
        var valid = validate(responce);
        if (!valid) {
            throw new Error("error!");
        }
    }

    _processResponce(responce) {
        const obj = JSON.parse(responce);;
        this._validateResponce(obj);
        return obj;
    }

    _processError(error) {
        throw error;
    }

    makeRequest() {
        return rp(this._createRequestUrl())
            .then((responce) => {
                return this._processResponce(responce);
            })
            .catch((err) => {
                this._processError(err);
            });
    }
}

module.exports = BaseHelper;