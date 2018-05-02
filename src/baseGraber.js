const Utils = require('./utils');
const utils = new Utils();

class BaseGraber {

    static GetAllGrabers() {
        return [BaseGraber.CreateHitbtcGraber(),
        BaseGraber.CreateLivecoinGraber()]
    }

    static CreateHitbtcGraber() {
        return BaseGraber.CreateGraber('hitbtc');
    }

    static CreateLivecoinGraber() {
        return BaseGraber.CreateGraber('livecoin');
    }

    static CreateGraber(dir) {
        const TickerHelper = require(`./${dir}/tickerHelper`);
        const TradeHelper = require(`./${dir}/tradeHelper`);
        const OrderHelper = require(`./${dir}/orderHelper`);
        return new BaseGraber(TickerHelper, TradeHelper, OrderHelper);
    }

    constructor(TickerHelper, TradeHelper, OrderHelper) {
        this.TickerHelper = TickerHelper;
        this.TradeHelper = TradeHelper;
        this.OrderHelper = OrderHelper;
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

    async  getTickers() {
        const promises = [];
        this.pairs.forEach(await (async (pair) => {
            const TickerHelper = this.TickerHelper;
            const tickerHelper = new TickerHelper(pair[0], pair[1]);
            await tickerHelper.makeRequest();
        }));
    }

    async getTrades() {
        const promises = [];
        await this.pairs.forEach(async (pair) => {
            const TradeHelper = this.TradeHelper;
            const tradeHelper = new TradeHelper(pair[0], pair[1]);
            await tradeHelper.makeRequest();
        })
    }

    async getOrders() {
        const promises = [];
        await this.pairs.forEach(async (pair) => {
            const OrderHelper = this.OrderHelper;
            const orderHelper = new OrderHelper(pair[0], pair[1]);
            await orderHelper.makeRequest();
        })
    }
}

module.exports = BaseGraber;