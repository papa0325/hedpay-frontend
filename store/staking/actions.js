import {
  GET_AVAILABLE_PACKAGES,
  BUY_PACKAGE, GET_STAKING_DATA, WITHDRAW, CLAIM_STAKE,
} from './consts';

export default {
  async [GET_AVAILABLE_PACKAGES]({ commit }) {
    const { result } = await this.$axios.$get('/staking-packages');
    commit('setStakingPacks', result.packages);
  },
  async [GET_STAKING_DATA]({ commit }, payload) {
    const { result } = await this.$axios.$get('/user/active-stakes', {
      params: {
        limit: payload ? payload.limit : 5,
        offset: payload ? payload.offset : 0,
      },
    });
    commit('setStakingData', result.stakes);
  },
  async [BUY_PACKAGE]({ dispatch }, payload) {
    const resp = await this.$axios.$post('/user/active-stakes', payload);
    dispatch(GET_AVAILABLE_PACKAGES);
  },
  async [WITHDRAW]({ dispatch, commit }, payload) {
    const resp = await this.$axios.$post('/staking/withdrawal', payload);

    if (resp.ok
    && resp.result.notifyList
    && resp.result.notifyList.length !== 0) {
      resp.result.notifyList.forEach((item) => {
        commit('user/delNotification', item);
      });
    }
    dispatch(GET_STAKING_DATA);
  },
  async [CLAIM_STAKE](store, id) {
    return this.$axios.$post(`/user/active-stakes/${id}/claim`);
  },
};
