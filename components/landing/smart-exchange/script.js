import financeFuncs from '~/mixins/finance';

export default {
  mixins: [financeFuncs],
  data: () => ({

  }),
  computed: {
    rates() {
      const currencies = ['hdp.ф', 'btc', 'eth', 'usd', 'eur', 'gbp', 'aed', 'cad'];
      const rates = [];

      currencies.forEach((currency) => {
        let name;
        if (currency === 'hdp.ф') {
          name = 'HDP.ф';
        } else {
          name = currency.toUpperCase();
        }
        rates.push({
          name,
          rate: {
            'hdp.ф': `ф ${this.financeConvert(currency, 'hdp.ф')}`,
            usd: `$ ${this.financeConvert(currency, 'usd')}`,
            eur: `€ ${this.financeConvert(currency, 'eur')}`,
            gbp: `£ ${this.financeConvert(currency, 'gbp')}`,
            jpy: `¥ ${this.financeConvert(currency, 'jpy')}`,
            aed: `د.إ ${this.financeConvert(currency, 'aed')}`,
            eth: `E ${this.financeConvert(currency, 'eth')}`,
            cad: `CA$ ${this.financeConvert(currency, 'cad')}`,
          },
        });
      });

      return rates;
    },
  },
};
