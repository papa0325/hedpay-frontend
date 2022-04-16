export default {
  props: ['value', 'tabs'],
  methods: {
    setTab(tab) {
      this.$emit('input', tab);
    },
  },
};
