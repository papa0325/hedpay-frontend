import Vue from 'vue';
import BigNumber from 'bignumber.js';

Vue.mixin({
  methods: {
    sumOrders(orders) {
      const pair = this.$store.getters['market/getSelectedPair'];
      const initialValue = {
        price: new BigNumber(0),
        quantity: new BigNumber(0),
        amount: new BigNumber(0),
      };
      const sum = orders.reduce((acc, cur) => ({
        price: acc.price.plus(cur.price),
        quantity: acc.quantity.plus(cur.quantity),
        amount: acc.amount.plus(cur.amount),
      }), initialValue);
      sum.quantity = parseFloat(sum.quantity.toFixed(pair.baseStep));
      sum.amount = parseFloat(sum.amount.toFixed(pair.quoteStep));
      return sum;
    },
    calculateMatchingOrder(array) {
      let result = null;
      if (array.length) {
        result = this.sumOrders(array);
        result.price = array[array.length - 1].price;
      }
      return result;
    },
    calculateRelativeFee(fee, amount) {
      // console.log(new BigNumber(amount).multipliedBy(fee).toFixed());
      return new BigNumber(amount).multipliedBy(fee);
    },
    calculateBTTFee(_currency, amount, fee, discount) {
      try {
        const coefficient = new BigNumber(discount).shiftedBy(-2).minus(1).negated();
        const targetCurr = process.env.DECIMAL_COIN.toLowerCase();
        const currency = _currency.toLowerCase();
        let rate = 1;
        if (currency !== targetCurr) {
          const pairs = this.$store.getters['market/getPairs'];
          const targetPair = pairs.find((pair) => pair.name.includes(currency) && pair.name.includes(targetCurr));
          if (targetPair.basicCoin.toLowerCase() === currency) {
            rate = targetPair.lastPrice;
          } else {
            rate = 1 / targetPair.lastPrice;
          }
        }
        return new BigNumber(rate).multipliedBy(200)
          .multipliedBy(amount).multipliedBy(fee)
          .multipliedBy(coefficient);
      } catch (e) {
        console.log(e);
        return new BigNumber(0);
      }
    },
    calculateAbsoluteFee(fee, amount) {
      // Прибавляем комиссию, т.к. она должны изыматься с баланса, а не с веденной суммы (?)
      return new BigNumber(amount).plus(fee);
    },
    // calculateMixedFee(feeAbs, feeRel, amount) {
    //
    // },
    $bpn(value, isNotRounded) {
      const pair = this.$store.getters['market/getSelectedPair'];
      const precision = pair.baseStep || 6;
      return this.$cpn(value, precision, isNotRounded);
    },
    $qpn(value, isNotRounded) {
      const pair = this.$store.getters['market/getSelectedPair'];
      const precision = pair.quoteStep || 8;
      return this.$cpn(value, precision, isNotRounded);
    },
    $wpn(value) {
      const wallet = this.$store.getters['ui/getSelectedWallet'];
      const precision = wallet.currency.decimals || 8;
      return this.$cpn(value, precision);
    },
    $cpn(value, precision, isNotRounded = false) {
      const options = {
        maximumFractionDigits: precision,
      };

      if (isNotRounded) {
        options.minimumFractionDigits = precision;
      }

      return this.$n(value, options);
    },
    $p(value, precision) {
      const reformattedValue = new BigNumber(value);
      return reformattedValue.toFixed(precision);
    },
  },
});
