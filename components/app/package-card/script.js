import BigNumber from 'bignumber.js';
import math from '~/mixins/math.js';

export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  methods: {
    buy() {
      this.$emit('buy-package', this.data);
    },
    reformatNumber(number) {
      return new BigNumber(number).shiftedBy(-4).toString();
    },
    limitNotification(dropTime) {
      const currentTime = Date.now();
      const timeLeft = dropTime - currentTime;
      if (timeLeft > 86400) return '3 days limit for each account';
      return 'Daily limit for each account';
    },
  },
};
