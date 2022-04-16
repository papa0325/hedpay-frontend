import { timeStamp } from 'console';
import { privateDecrypt } from 'crypto';
import VueDropify from 'vue-dropify';
import { SIGN_UP_REQUEST, SIGN_UP_VALIDATE } from '~/store/user/consts';
import enStrings from '../../locales/en.json';
import { POST_DOC } from '../../store/user/consts';

export default {
  layout: 'auth',
  middleware: 'guest',
  props: {
    modelCountry: 'Canada',
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      nickName: '',
      email: '',
      password: '',
      rpassword: '',
      code: '',
      emailValidateError: '',
      checkbox: false,

      country: 'Canada',
      nameTitle: 'Mr',
      middleName: '',

      postNo: '',
      postApt: '',
      postCode: '',
      phoneNo: 1,
      phoneNumber: '',
      birthday: '',
      birthYear: 2021,
      birthMonth: 1,
      birthDay: 1,
      gender: 'Female',
      street: '',
      city: '',
      province: '',
      curFaceUrl: '',
      identityFaceUrl: '',
      identityFileUrl: '',

      passId: '',
      passExpirDate: '',
      passExpirYear: 2021,
      passExpirMonth: 1,
      passExpirDay: 1,
      passPlaceIssue: '',
      employment: 1,
      annualIncome: 1,
      proofFileUrl: '',

      pendingConfirm: false,
      showRepeatBtn: false,

      ref: '',

      sitekey: '6Lc1KqYZAAAAAFWZwW7adoEd02_x2dUNLioQyjgg',
      captcha: '',
      er: [],

      pageStep: 0,
      stepType: 1,
      normal_o: enStrings.auth.form.options.normal_o,
      info_l: enStrings.auth.form.options.info_l,
      info_s: enStrings.auth.form.options.info_s,
      info_p: enStrings.auth.form.options.info_p,
      countryList: enStrings.auth.form.account_name.country_list,
      countryCode: enStrings.auth.form.profile.countrycode,
      monthList: enStrings.auth.form.profile.month,
      errors: [],
    };
  },
  components: {
    'vue-dropify': VueDropify,
  },
  computed: {
    pricingData() {
      const arr = [];
      for (let i = 0; i < this.normal_o.length; i++) {
        const tempdata = {
          title: this.normal_o[i],
          limit: this.info_l[i],
          standard: this.info_s[i],
          pro: this.info_p[i],
        };
        arr.push(tempdata);
      }
      return arr;
    },
  },
  mounted() {
    if (this.$route.query.hasOwnProperty('ref')) {
      const { ref } = this.$route.query;
      this.ref = ref;
    }

    if (this.$route.query.hasOwnProperty('confirmEmail')) {
      window.history.replaceState({}, document.title, this.$route.path);
      this.pendingConfirm = true;

      this.repeatEmailCode();
    }
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

    async preludeSignUp() {
      this.er = [];
      if (this.captcha === '') {
        this.er.push(0);
      }
      if (this.er.length === 0) {
        await this.signUp();
        // await this.$recaptcha.reset()
      }
    },
    getEr(i) {
      return this.er.indexOf(i) !== -1;
    },
    async signUp() {
      try {
        let tempannual;
        switch (this.annualIncome) {
          case 1:
            tempannual = '20,000-50,000';
            break;
          case 2:
            tempannual = '50,000-70,000';
            break;
          case 3:
            tempannual = '70,000-100,000';
            break;
          default:
            return '0';
        }
        this.birthday = this.birthYear.toString() + this.birthMonth.toString() + this.birthDay.toString();
        this.passExpirDate = this.passExpirYear.toString() + this.passExpirMonth.toString() + this.passExpirDay.toString();
        const realPhone = this.countryCode[this.phoneNo] + this.phoneNumber.toString();

        const payload = {
          country: this.country,
          nickName: this.nickName,
          email: this.email,
          password: this.password,
          nameTitle: this.nameTitle,
          firstName: this.firstName,
          middleName: this.middleName,
          lastName: this.lastName,
          kycLevel: this.stepType,

          // recaptcha: this.captcha,
          // postNo: this.postNo,
          // postApt: this.postApt,
          // postCode: this.postCode,
          // phoneNumber: realPhone,
          // birthday: this.birthday,
          // gender: this.gender,
          // street: this.street,
          // city: this.city,
          // province: this.province,
          // curFaceUrl: this.curFaceUrl,
          // identityFaceUrl: this.identityFaceUrl,
          // identityFileUrl: this.identityFileUrl,

          // passId: this.passId,
          // passExpirDate: this.passExpirDate,
          // passPlaceIssue: this.passPlaceIssue,
          // employment: this.employment === 1 ? 'Employed' : 'UnEmployed',
          // annualIncome: tempannual,
          // proofFileUrl: this.proofFileUrl,
        };
        console.log('data', payload);

        if (this.ref !== '') {
          payload.ref = this.ref;
        }
        if (this.stepType === 2) {
          payload.postNo = this.postNo;
          payload.postApt = this.postApt;
          payload.postCode = this.postCode;
          payload.phoneNumber = realPhone;
          payload.birthday = this.birthday;
          payload.gender = this.gender;
          payload.street = this.street;
          payload.city = this.city;
          payload.province = this.province;
        } else if (this.stepType === 3) {
          payload.passId = this.passId,
          payload.passExpirDate = this.passExpirDate;
          payload.passPlaceIssue = this.passPlaceIssue;
          payload.employment = this.employment === 1 ? 'Employed' : 'UnEmployed';
          payload.annualIncome = tempannual;
        }

        await this.$store.dispatch(`user/${SIGN_UP_REQUEST}`, payload);
        this.pendingConfirm = true;
      } catch (e) {
        // await this.$recaptcha.reset()
        console.log(e);
      }
    },

    async handleFileUpload() {
      const formData = new FormData();
      formData.append('files[0]', this.curFaceUrl[0]);
      formData.append('files[1]', this.identityFaceUrl[0]);
      formData.append('files[2]', this.identityFileUrl[0]);
      console.log('files', formData);
      await this.$store.dispatch(`user/${POST_DOC}`, formData);
    },

    handleFileDoc(e) {
      const fileobj = e.target.files[0];
      console.log('file', fileobj);
    },

    async validateEmail() {
      try {
        await this.$store.dispatch(`user/${SIGN_UP_VALIDATE}`, {
          code: this.code,
        });
        this.$store.commit('user/changeUserStatus', 1);

        setTimeout(() => {
          this.$router.push('/app/dashboard');
        }, 200);
      } catch (e) {
        this.emailValidateError = 'Invalid code';
      }
    },

    async repeatEmailCode() {
      try {
        await this.$axios.$post('/auth/send-validation');
      } catch (e) {
        console.log(e);
      }
    },

    setStep(stepType, step) {
      console.log('stepType: ', stepType, 'step: ', step);
      this.stepType = stepType;
      this.nextStep(step);
    },

    async nextStep(t) {
      if (this.pageStep === 3) {
        // alert(JSON.stringify(this.curFaceUrl[0]));
      }

      if (this.pageStep === 5 && this.stepType === 1) {
        await this.signUp();
        this.pageStep += t;
      } else if (this.pageStep === 6) {
        await this.signUp();
        this.pageStep += t;
      } else {
        this.pageStep += t;
      }
    },

    previousStep(t) {
      this.pageStep -= t;
      if (t == 1) {
        this.$router.push('/sign-in');
      }
    },
    ExploreMyAccount() {
      this.$router.push('/sign-in');
    },
  },
};
