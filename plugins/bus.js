import Vue from 'vue';

if (process.browser) {
  window.EventBus = new Vue();
}
