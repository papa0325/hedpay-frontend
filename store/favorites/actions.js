import {
  DEL_FAVORITE,
  GET_FAVORITES, POST_FAVORITE,
} from './consts';

export default {
  async [GET_FAVORITES]({ commit }, payload) {
    const response = await this.$axios.$get('/contacts');
    commit('setFavorites', response.result.contacts);
  },
  async [POST_FAVORITE]({ dispatch }, payload) {
    const response = await this.$axios.$post('/contacts/add', {
      contactId: payload,
    });
  },
  async [DEL_FAVORITE]({ dispatch }, payload) {
    const response = await this.$axios.$delete('/contacts/remove', {
      data: {
        contactId: payload,
      },
    });
  },
};
