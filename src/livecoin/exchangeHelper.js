const BaseHelper = require('../baseHelper');

class ExchangeHelper extends BaseHelper {

    get exchange() {
        return 'livecoin.net';
    }

    get url() {
        return 'https://api.livecoin.net'
    }

    _createCurrencyPair(currency1, currency2) {
        return `${currency1}/${currency2}`;
    }

    _createRequestUrl() {
        return `${this.url}/${this.uri}?currencyPair=${this.pair}`
    }
}

module.exports = ExchangeHelper;