export default {
  getPackages: (state) => {
    let packs = [];
    if (Array.isArray(state.distSession)) {
      packs = state.distSession;
    }
    return packs;
  },
};
