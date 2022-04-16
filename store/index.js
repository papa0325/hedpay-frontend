export const state = () => ({
  connectionStatus: false,
});
export const mutations = {
  setConnectionStatus(state, status) {
    state.connectionStatus = status;
  },
};
export const getters = {
  connectionStatus: (state) => state.connectionStatus,
};
