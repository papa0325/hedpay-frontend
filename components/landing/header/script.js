export default {
  data() {
    return {
      isMenuShown: false,
    };
  },
  methods: {
    showMenu() {
      this.isMenuShown = true;
    },
    hideMenu() {
      this.isMenuShown = false;
    },
  },
};
