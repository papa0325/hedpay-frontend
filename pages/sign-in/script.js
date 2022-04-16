import { SIGN_IN_REQUEST, AUTH_INIT, LOG_OUT } from '~/store/user/consts';
// import VueRecaptcha from 'vue-recaptcha';

export default {
  layout: 'auth',
  middleware: 'guest',
  // components: {
  //   'vue-recaptcha': VueRecaptcha
  // },
  data() {
    return {
      email: '',
      password: '',
      pending2fa: false,
      code2fa: '',
      sitekey: '6Lc1KqYZAAAAAFWZwW7adoEd02_x2dUNLioQyjgg',
      captcha: '',
      er: [],
      rightImg: require('../../assets/images/media/Hedpay-Login-Women.png'),
    };
  },
  mounted() {
  },
  methods: {
    onCaptchaError(error) {
      console.log('Error happened:', error);
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse();
        console.log('ReCaptcha token:', token);
        await this.$recaptcha.reset();
      } catch (error) {
        console.log('Login error:', error);
      }
    },
    onCaptchaSuccess(token) {
      this.captcha = token;
      this.er = [];
      // console.log('Succeeded:', token)
    },
    onExpired() {
      console.log('Expired');
    },

    async preludeSignIn() {
      // this.er = [];
      await this.signIn();
      // if (this.captcha === '') {
      //   this.er.push(0);
      // }
      // if (this.er.length === 0) {
      //   await this.$recaptcha.reset()
      // }
    },
    getEr(i) {
      return this.er.indexOf(i) !== -1;
    },
    async signIn() {
      console.log('123');
      try {
        // const data = {
        //   email: this.email,
        //   password: this.password,
        //   recaptcha: this.captcha,
        // };
        // if (this.pending2fa && this.code2fa) {
        //   data.totp = this.code2fa;
        // }
        // this.$router.push('/app/dashboard');
        // const { status } = await this.$store.dispatch(`user/${SIGN_IN_REQUEST}`, data);
        // if (status) {
        //   alert('1111');
        await this.$store.dispatch(`user/${AUTH_INIT}`);
        this.$router.push('/app/dashboard');
        // } else {
        //   console.log('email is not confirmed');
        //   this.$router.push('/sign-up?confirmEmail');
        // }
      } catch (e) {
        console.dir(e);
        const err = e.response.data;

        if (err.data.field && err.data.field === 'totp') {
          this.pending2fa = true;

          setTimeout(() => {
            this.$refs.observer.reset();
            this.$refs.code2fa.focus();
          }, 50);
        } else {
          // await this.$recaptcha.reset()
        }
      }
    },
  },
};
