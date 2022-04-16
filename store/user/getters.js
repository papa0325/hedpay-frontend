import BigNumber from 'bignumber.js';

const getCryptoBalance = (amount, decimals) => {
  if (amount) {
    return new BigNumber(amount).shiftedBy(-decimals).toNumber();
  }
  return 0;
};

const getUsdBalance = (amount, decimals, rate) => {
  if (amount) {
    return (
      parseInt(
        new BigNumber(rate)
          .shiftedBy(-6)
          .times(new BigNumber(amount).shiftedBy(-decimals))
          .toNumber() * 100,
      ) / 100
    );
  }
  return 0;
};
const getPercentage = (amount) => {
  if (amount) {
    return new BigNumber(amount).shiftedBy(0).toNumber();
  }
  return 0;
};
const getWalletColor = (coin) => {
  switch (coin) {
    case 'Ethereum':
      return '#66729D';
    case 'HEdpAY':
      return '#2DCCD3';
    case 'BitCoin':
      return '#F2C94C';
    case 'USDT': return '#548C59';
    case 'USD': return '#548C25';
    case 'EUR': return '#77548C';
    case 'GBP': return '#F2994A';
    case 'AED': return '#9B51E0';
    case 'CAD': return '#9B21E0';
    default:
      return '#2dccd3';
  }
};

export default {
  availableCountries: (state) => state.availableCountries,
  countryByCode: (state) => (code) => state.availableCountries.find((el) => el.code === code),
  isAuth: (state) => !!(state.tokens.access && state.tokens.refresh),
  accessToken: (state) => state.tokens.access,
  refreshToken: (state) => state.tokens.refresh,
  getProfile: (state) => state.profile,
  getWallets: (state) => {
    const order = ['HEdpAY', 'Ethereum', 'BitCoin', 'USDT', 'USD', 'EUR', 'GBP', 'AED', 'CAD']; // TODO добавить порядок при добавлении новых кошельков

    let wallets = [];

    state.wallets.forEach((wallet) => {
      wallets.push({
        id: wallet.id,
        icon: wallet.currency.id,
        coin: wallet.currency.fullTitle,
        ticker: wallet.currency.symbol,
        balance: wallet.balance,
        balanceCrypto: getCryptoBalance(
          wallet.balance,
          wallet.currency.decimals,
        ),
        balanceToUsd: getUsdBalance(
          wallet.balance,
          wallet.currency.decimals,
          wallet.currency.currentRate,
        ),
        address: wallet.address,
        rate: getCryptoBalance(wallet.currency.currentRate, 6),
        color: getWalletColor(wallet.currency.fullTitle),
        decimals: wallet.currency.decimals,
        feeRelative: getPercentage(
          wallet.currency.txLimits.withdrawCommissionPercentage,
        ),
        feeFixed: getCryptoBalance(
          wallet.currency.txLimits.withdrawCommissionFixed,
          wallet.currency.decimals,
        ),
        valueMin: getCryptoBalance(
          wallet.currency.txLimits.minWithdraw,
          wallet.currency.decimals,
        ),
      });
    });

    wallets = wallets.sort((a, b) => order.indexOf(a.coin) - order.indexOf(b.coin));

    return wallets;
  },
  getTotalBalance: (state) => {
    let total = new BigNumber(0);
    state.wallets.forEach((wallet) => {
      const usd = getUsdBalance(
        wallet.balance,
        wallet.currency.decimals,
        wallet.currency.currentRate,
      );
      total = total.plus(usd);
    });

    return total.toFixed(2);
  },
  getDecimals: (state) => {
    const obj = {};

    state.wallets.forEach((wallet) => {
      obj[wallet.currency.id] = wallet.currency.decimals;
    });
    return obj;
  },
  getAccessToken: (state) => state.tokens.access,
  getUserStatus: (state) => state.status,
  is2FA: (state) => state.is2FA,
  getRates: (state) => {
    const rates = state.rates.map((rate) => ({ ...rate }));
    const calcRates = {};
    const cropCurrency = (arr, currencyId) => arr.filter((currency) => currency.id === currencyId)[0] || [];

    const usdToEur = new BigNumber(1).dividedBy(
      new BigNumber(cropCurrency(rates, 'eur').currentRate)
        .shiftedBy(-6)
        .toNumber(),
    );
    const usdToBtc = new BigNumber(cropCurrency(rates, 'btc').currentRate);
    const usdToEth = new BigNumber(cropCurrency(rates, 'eth').currentRate);

    calcRates.usd = rates.map((currency) => {
      const copy = { ...currency };
      copy.currentRate = getCryptoBalance(copy.currentRate, 6);
      return copy;
    });
    calcRates.eur = rates.map((currency) => {
      const copy = { ...currency };
      if (copy.id === 'eur') {
        copy.id = 'usd';
        copy.symbol = '$';
        copy.currentRate = usdToEur;
        return copy;
      }

      copy.currentRate = new BigNumber(copy.currentRate).multipliedBy(usdToEur);
      copy.currentRate = getCryptoBalance(copy.currentRate, 6);
      return copy;
    });
    calcRates.btc = rates.map((currency) => {
      const copy = { ...currency };
      const { currentRate } = copy;

      copy.currentRate = new BigNumber(usdToBtc)
        .multipliedBy(new BigNumber(1).dividedBy(new BigNumber(currentRate)))
        .toNumber();
      return copy;
    });
    calcRates.eth = rates.map((currency) => {
      const copy = { ...currency };
      const { currentRate } = copy;

      copy.currentRate = new BigNumber(usdToEth)
        .multipliedBy(new BigNumber(1).dividedBy(new BigNumber(currentRate)))
        .toNumber();
      return copy;
    });

    return calcRates;
  },
  _getRates: (state) => state.rates,
  getReferalData: (state) => state.referal,
  getNotifications: (state) => state.notifications,
  getNotificationsReverse: (state) => state.notifications.slice(),
  getDocs: (state) => state.docs,
  getReferalBonuses: (state) => state.referalBonuses,
  getMessages: (state) => state.messages,
  getChatId: (state) => state.chatId,
};
