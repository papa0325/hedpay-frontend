import Modal from '../modal';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      defaults: {
        title: '',
        text: '',
        mode: '',
        autoClose: 0, //  time in ms
        callback: null,
      },
      alert: null,
    };
  },
  methods: {
    success(option) {
      return new Promise((resolve) => {
        this.defaults.mode = 'success';
        this.defaults.title = 'Success';

        this.$mount('#custom-alert');
        this.alert = { ...this.defaults, ...option, callback: resolve };

        if (this.alert.autoClose) {
          setTimeout(this.close, this.alert.autoClose);
        }
      });
    },
    error() {

    },
    close() {
      this.alert.callback();
      this.$destroy();

      const oldAlert = document.getElementById('custom-alert');
      const newAlert = document.createElement('div');
      newAlert.id = 'custom-alert';

      oldAlert.replaceWith(newAlert);
    },
  },
};
