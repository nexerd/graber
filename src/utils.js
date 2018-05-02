class Utils {
    get CryptoCurrencyHelper() {
        return new CryptoCurrencyHelper();
    }

    get CommonCurrencyHelper() {
        return new CommonCurrencyHelper();
    }
}

class CryptoCurrencyHelper {

    get Bitcoin() {
        return 'BTC';
    }

    get Litecoin() {
        return 'LTC';
    }

    get Ethereum() {
        return 'ETH';
    }

    get Bitcoin_Cash () {
        return 'BCH';
    }

    get EOS() {
        return 'EOS';
    }

    get Ripple() {
        return 'XRP';
    }
}

class CommonCurrencyHelper {

    get USD() {
        return 'USD';
    }

    get EUR() {
        return 'EUR';
    }

    get RUR() {
        return 'RUR';
    }
}

module.exports = Utils;