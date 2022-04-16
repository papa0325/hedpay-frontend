import Vue from 'vue';

export default {
  setTest(state) {
    console.log('root=>');
    window.$cookies.set('status', true, { path: '/' });
  },
  setOldTokens(state, { access, refresh, status }) {
    state.tokens.access = access;
    state.tokens.refresh = refresh;
    state.status = status;
  },
  setNewTokens(state, { access, refresh, status }) {
    state.tokens.access = access;
    state.tokens.refresh = refresh;
    state.status = status;

    window.$cookies.set('access', access, { path: '/' });
    window.$cookies.set('refresh', refresh, { path: '/' });

    if (status) {
      window.$cookies.set('status', status, { path: '/' });
    }
  },
  logOut(state) {
    console.log('heree');
    window.$cookies.remove('access');
    window.$cookies.remove('refresh');
    window.$cookies.remove('status');

    state.id = '';
    state.profile = {};
    state.wallets = [];
    state.tokens.access = '';
    state.tokens.refresh = '';
    state.status = 0;
    state.referal = {};
    state.notifications = [];
    state.docs = [];
  },
  setUserInfo(state, user) {
    state.id = user.id;
    state.wallets = user.wallets;
    state.status = user.status;
  },
  setUserProfile(state, profile) {
    state.profile = { ...profile };
  },
  setAvailableCountries(state, availableCountries) {
    state.availableCountries = availableCountries;
  },
  setWallets(state, data) {
    state.wallets = data.wallets;
  },
  change2faStatus(state, is2FA) {
    state.is2FA = is2FA;
  },
  changeUserStatus(state, status) {
    state.status = status;
    window.$cookies.set('status', status, { path: '/' });
  },
  setRates(state, currencies) {
    state.rates = currencies;
  },
  setRefLinkData(state, value) {
    state.referal = value.result;
  },
  setNotifications(state, value) {
    state.notifications = value.result;
  },
  pushNotification(state, value) {
    state.notifications.unshift(value);
  },
  delNotification(state, value) {
    const res = state.notifications.findIndex((el, i) => el.id === value);
    state.notifications.splice(res, 1);
    // console.log(res)
  },
  setDocs(state, value) {
    state.docs = value;
  },
  setReferalBonuses(state, value) {
    state.referalBonuses = value;
  },
  setMessages(state, messages) {
    state.messages = messages.reverse();
  },
  setChatId(state, id) {
    state.chatId = id;
  },
  appendMessage(state, message) {
    state.messages.push(message);
  },
  setUserStatus(state, status) {
    state.status = status;
  },
};
