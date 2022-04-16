export default {
  middleware: 'guest',
  data() {
    return {
      email: '',
      resetCode: '',
      password: '',
      passwordRepeat: '',
      step: 1,
    };
  },
  mounted() {
    const { email, code } = this.$route.query;

    if (email && code) {
      this.email = email;
      this.resetCode = code;
      this.step = 3;
    } else {
      window.history.replaceState({}, document.title, this.$route.path);
    }
  },
  methods: {
    async reset() {
      try {
        await this.$axios.$post('/auth/restore/change', {
          password: this.password,
          email: this.email,
          restoreCode: this.resetCode,
        });

        this.$notify({
          type: 'success',
          text: 'Password successfully changed',
          closeOnClick: true,
        });

        this.$router.push('/sign-in');
      } catch (e) {
        console.log(e);
      }
    },
    async sendCode() {
      try {
        await this.$axios.$post('/auth/restore/send', {
          email: this.email,
        });
        this.step = 2;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
