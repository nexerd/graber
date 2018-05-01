const Utils = require('./utils');
const TickerHelper = require('./tickerHelper');
const TradeHelper = require('./tradeHelper');
const OrderHelper = require('./orderHelper');

const utils = new Utils();

class Graber {

    get url() {
        return 'https://api.livecoin.net'
    }

    get pairs() {
        const btc = utils.CryptoCurrencyHelper.Bitcoin;
        const ltc = utils.CryptoCurrencyHelper.Litecoin;
        const eth = utils.CryptoCurrencyHelper.Ethereum;
        const bch = utils.CryptoCurrencyHelper.Bitcoin_Cash;
        const eos = utils.CryptoCurrencyHelper.EOS;

        const usd = utils.CommonCurrencyHelper.USD;

        return [[btc, usd],
        [ltc, usd],
        [eth, usd],
        [bch, usd],
        [eos, usd]];
    }

    getTickers() {
        const promises = [];
        this.pairs.forEach((pair) => {
            const tickerHelper = new TickerHelper(this.url,
                pair[0], pair[1]);
            promises.push(tickerHelper.makeRequest());
        })
        return Promise.all(promises);
    }

    getTrades() {
        const promises = [];
        this.pairs.forEach((pair) => {
            const tickerHelper = new TradeHelper(this.url,
                pair[0], pair[1]);
            promises.push(tickerHelper.makeRequest());
        })
        return Promise.all(promises);
    }

    getOrders() {
        const promises = [];
        this.pairs.forEach((pair) => {
            const tickerHelper = new OrderHelper(this.url,
                pair[0], pair[1]);
            promises.push(tickerHelper.makeRequest());
        })
        return Promise.all(promises);
    }
}

module.exports = Graber;