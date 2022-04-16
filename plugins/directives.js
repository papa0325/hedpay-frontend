import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';

export default () => {
  if (!process.server) {
    Vue.directive('mask', VueMaskDirective);
  }
};
