import BigNumber from 'bignumber.js';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      _rates: 'user/_getRates',
    }),
  },
  methods: {
    _financeGetAmount(amount, decimals) {
      return amount ? new BigNumber(amount).shiftedBy(-decimals) : new BigNumber(0);
    },
    financeGetAmountCrypto(amount, decimals) {
      return Number(this._financeGetAmount(amount, decimals).toFixed(8, 1));
    },
    financeGetAmountFiat(amount, decimals) {
      return this._financeGetAmount(amount, decimals).toFixed(2, 1);
    },

    financeConvert(from, to, amount = 1, amountDecimals = 0) {
      if (!this._rates.length) return '0.00';
      const usdRate = { currentRate: '1000000', fiat: true };

      const fromRate = from === 'usd' ? usdRate : this._rates.find((rate) => rate.id === from);
      const toRate = to === 'usd' ? usdRate : this._rates.find((rate) => rate.id === to);

      if (!fromRate || !toRate) {
        throw Error(`Ivalid currencies: {from: ${from}, to: ${to}}`);
      }

      const resultDecimals = toRate.fiat ? 2 : 6;

      return new BigNumber(fromRate.currentRate).shiftedBy(-6)
        .times(new BigNumber(amount).shiftedBy(-amountDecimals))
        .div(new BigNumber(toRate.currentRate).shiftedBy(-6))
        .toFixed(resultDecimals, 1);
    },
  },
};
