import Vue from 'vue';
import VueNotification from 'vue-notification';

Vue.use(VueNotification);

export default (context, inject) => {
  inject('notify', Vue.notify);
};
