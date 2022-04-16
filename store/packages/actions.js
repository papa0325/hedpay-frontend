import {
  GET_AVAILABLE_PACKAGES,
  BUY_PACKAGE,
} from './consts';

export default {
  async [GET_AVAILABLE_PACKAGES]({ commit }) {
    const resp = await this.$axios.$get('/distribution/list');
    commit('setPackageList', resp.result);
  },
  async [BUY_PACKAGE]({ commit, dispatch }, payload) {
    const resp = await this.$axios.$post('/distribution/buy', payload);
    dispatch(GET_AVAILABLE_PACKAGES);
  },
};
