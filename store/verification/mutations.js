export default {
  setVerification(state, status) {
    state.verified = status;
  },
  setVerifiedObject(state, newObject) {
    state.verifiedObject = { ...newObject };
  },
};
