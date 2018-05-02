const BaseHelper = require('../baseHelper');

class ExchangeHelper extends BaseHelper {

    get exchange() {
        return 'hitbtc.com';
    }

    get url() {
        return 'https://api.livecoin.net'
    }

    _createCurrencyPair(currency1, currency2) {
        return `${currency1}${currency2}`;
    }

    _createRequestUrl(fisrtCurrency) {
        return `${this.url}/${this.uri}/${this.pair}`
    }
}

module.exports = BaseHelper;