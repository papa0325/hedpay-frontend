import Alert from './alert.vue';

Alert.install = (Vue, options = {}) => {
  Vue.prototype.$alert = new (Vue.extend(Alert))({ propsData: options });
};

export default Alert;
