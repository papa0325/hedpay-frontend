export default {
  props: ['width', 'autoWidth'],
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
