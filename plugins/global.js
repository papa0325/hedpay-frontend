import Vue from 'vue';

import Donut from 'vue-css-donut-chart';
import pageComponent from '../components/app/page-component';
import Alert from '../components/app/alert';
import 'vue-css-donut-chart/dist/vcdonut.css';

export default function ({ app }) {
  if (process.browser) {
    window.$cookies = app.$cookies;

    window.debounce = function (f, ms) {
      let wait = false;

      return function () {
        if (wait) return;

        f.apply(this, arguments);
        wait = true;
        setTimeout(() => wait = false, ms);
      };
    };
  }

  Vue.filter('digits', (value) => {
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
  });

  Vue.filter('capitalize', (value) => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  Vue.filter('cryptoDigits', (value) => {
    if (!value) return 0;
    const n = Number(value.toFixed(8));
    const formatString = n.toString();

    return formatString;
  });

  Vue.component('page-component', pageComponent);
  Vue.use(Donut);
  Vue.use(Alert);
}
