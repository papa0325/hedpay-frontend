import ClickOutside from 'vue-click-outside';
import Qrcode from 'qrcode.vue';
// import VueDropify from 'vue-dropify';
import { mapGetters } from 'vuex';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import moment from 'moment';
import Modal from '../../../components/app/modal';
import CustomSelect from '~/components/app/custom-select/customSelect';
import { VERIFY_USER } from '~/store/verification/consts';

import {
  CHANGE_PROFILE,
  GET_USER,
  POST_DOC,
  GET_DOC,
  DEL_DOC,
} from '~/store/user/consts';

export default {
  directives: {
    ClickOutside,
  },
  layout: 'app',
  middleware: 'auth',
  components: {
    Modal,
    Qrcode,
    DatePicker,
    CustomSelect,
    // 'vue-dropify': VueDropify,
  },
  data() {
    return {
      myAccount: false,
      passdiv: false,
      kyc: false,
      myIdentity: false,
      bankBox: false,
      now: moment(String(new Date())).format('DD/MM/YYYY'),

      identityDocumentItems: ['Driver license', 'National ID card', 'Passport'],

      localProfile: {},
      fieldsValue: {
        avatar: {},
        firstName: {
          required: true,
          er: '',
        },
        middleName: {
          er: '',
        },
        lastName: {
          required: true,
          er: '',
        },
        gender: {
          type: 'gender',
          er: '',
          items: [
            {
              label: this.$t('profile.fields.gender.male'),
              value: 'M',
            },
            {
              label: this.$t('profile.fields.gender.female'),
              value: 'F',
            },
          ],
        },
        birthDate: {
          required: true,
          type: 'date',
          er: '',
        },
        country: {
          type: 'country',
          required: true,
          er: '',
        },
        phone: {
          type: 'phone',
          er: '',
        },
        identityDocumentNumber: {
          er: '',
        },
        shippingState: {
          er: '',
        },
        shippingCity: {
          er: '',
        },
        shippingStreetName: {
          required: true,
          er: '',
        },
        shippingBuildingNum: {
          required: true,
          er: '',
        },
        shippingZip: {
          required: true,
          er: '',
        },

      },
      fieldsMain: [
        'firstName',
        'middleName',
        'lastName',
        'gender',
        'birthDate',
        'country',
        'identityDocumentNumber',
        'phone',
      ],
      fieldsShipping: [
        'shippingState',
        'shippingCity',
        'shippingStreetName',
        'shippingBuildingNum',
        'shippingZip',
      ],

      fieldsInput: [
        'firstName',
        'lastName',
        'middleName',
        'gender',
        'avatar',
        'birthDate',
        'country',
        'phone',
        'identityDocumentNumber',
        'shippingState',
        'shippingCity',
        'shippingStreetName',
        'shippingBuildingNum',
        'shippingZip',
      ],

      currentTab: '2FA',
      tabs: ['profile', '2FA', 'verification', 'change password'],

      // 2fa
      // is2FA: false,

      options2FA: {
        startEnablingProcess: false,
        startDisablingProcess: false,

        enableProcess: {
          step: 1,
          key: '',
          password: '',
          code: '',
        },

        disableProcess: {
          password: '',
          code: '',
        },
      },

      // change pass
      changePass: {
        show: false,
        oldPass: '',
        newPass: '',
        repeatNewPass: '',
      },

      // tel
      tel: '',

      verifyPhone: {
        show: false,
        step: 1,
        newPhone: '',
        code: '',
      },

      // user data
      userData: {
        photo: '',
        name: '',
        surname: '',
        email: '',
        username: '',
      },
      isEditData: false,
      showCropper: false,
    };
  },
  watch: {
    profile() {
      this.getData();
      this.setDefaultProfile();
    },
  },
  computed: {
    ...mapGetters({
      profile: 'user/getProfile',
      is2FA: 'user/is2FA',
      getDocs: 'user/getDocs',
      availableCountries: 'user/availableCountries',
      countryByCode: 'user/countryByCode',
      getUserStatus: 'user/getUserStatus',
    }),
    otpLink() {
      return `otpauth://totp/HEdpAY:${this.profile.email}?secret=${this.options2FA.enableProcess.key}&issuer=HEdpAY`;
    },
    getProfileChanges() {
      const changesFields = [];
      this.fieldsInput.forEach((item) => {
        if (this.localProfile[item] !== this.profile[item]) {
          changesFields.push(item);
        }
      });
      return changesFields;
    },
    gender: {
      get() {
        return this.localProfile.gender;
      },
      set(gender) {
        this.localProfile.gender = gender.value;
      },
    },
    country: {
      get() {
        return this.localProfile.country;
      },
      set(value) {
        this.localProfile.country = value.code;
      },
    },
  },
  mounted() {
    this.$store.dispatch(`user/${GET_USER}`);
    this.getData();
    if (this.$route.query.show2fa === 'true') {
      this.enable2faOpenModal();
    }
    window.history.replaceState({}, document.title, this.$route.path);

    this.fieldsValue.firstName.title = this.$t('profile.fields.firstName');
    this.fieldsValue.lastName.title = this.$t('profile.fields.lastName');
    this.fieldsValue.middleName.title = this.$t('profile.fields.middleName');
    this.fieldsValue.gender.title = this.$t('profile.fields.gender.title');
    this.fieldsValue.birthDate.title = this.$t('profile.fields.birthDate');
    this.fieldsValue.phone.title = 'Phone';

    this.fieldsValue.country.title = this.$t(
      'profile.fields.country',
    );
    this.fieldsValue.identityDocumentNumber.title = this.$t(
      'profile.fields.identityDocumentNumber',
    );

    this.fieldsValue.shippingState.title = 'State/province';
    this.fieldsValue.shippingCity.title = this.$t(
      'profile.fields.shippingCity',
    );
    this.fieldsValue.shippingStreetName.title = this.$t(
      'profile.fields.shippingStreetName',
    );
    this.fieldsValue.shippingBuildingNum.title = this.$t(
      'profile.fields.shippingBuildingNum',
    );
    this.fieldsValue.shippingZip.title = this.$t('profile.fields.shippingZip');
  },
  methods: {
    GoTo() {
      this.myIdentity = false;
    },
    OpenProfile(param) {
      if (param == 'My-Account') {
        this.myAccount = !this.myAccount;
      }
      if (param == 'KYC') {
        this.kyc = !this.kyc;
      }
      if (param == 'MyIdentity') {
        this.myIdentity = !this.myIdentity;
      }
      if (param == 'Bank') {
        this.bankBox = !this.bankBox;
      }
    },
    CloseProfile(param) {
      console.log('param', param);
      if (param == 'My-Account') {
        this.myAccount = false;
      }
      if (param == 'KYC') {
        this.kyc = false;
      }
      if (param == 'MyIdentify') {
        this.myIdentity = false;
      }
    },

    appearPassword() {
      console.log('changepass');
      this.passdiv = true;
    },
    defineGender(gender) {
      const _gender = this.fieldsValue.gender.items.find((i) => i.value === gender);
      return _gender?.label || '';
    },
    findCountryByCode(code) {
      const existed = this.newCountryCodes.find((el) => el.code === code);
      if (existed) {
        return existed;
      }
      return null;
    },
    async onVerifySubmit() {
      try {
        const res = await this.$store.dispatch(`verification/${VERIFY_USER}`);
        await this.$store.dispatch(`user/${GET_USER}`);
        if (res.ok) {
          this.$notify({
            type: 'success',
            text: res.message,
            closeOnClick: true,
          });
        } else if (res.error) {
          this.$notify({
            type: 'error',
            text: res.error,
            closeOnClick: true,
          });
        } else {
          this.$notify({
            type: 'error',
            text: res.message,
            closeOnClick: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    cutString(value) {
      const centerIndex = Math.ceil(value.length / 2);
      if (value.length > 12) {
        const lengthPoints = value.length - 10;
        return `${value.substr(0, centerIndex - lengthPoints / 2)}${'.'.repeat(
          3,
        )}${value.substr(centerIndex + lengthPoints / 2, value.length)}`;
      }
      return value;
    },
    async removeDocFile(i) {
      this.fieldsValue.docIdentCopyFile.er = '';
      await this.$store.dispatch(`user/${DEL_DOC}`, i);
      this.$store.dispatch(`user/${GET_DOC}`);

      // this.fieldsValue.docIdentCopyFile.er = '';
      // this.userLoader = true;
      //
      // const res = await this.fetchDelgetDocs(i);
      // if (res.ok) {
      //   await this.fetchGetgetDocs();
      // }
      // this.userLoader = false;
      // console.log(res);
    },
    async handleImageDoc(e) {
      this.fieldsValue.docIdentCopyFile.er = '';
      const fileObj = e.target.files[0];
      if (e.currentTarget !== null) {
        if (
          fileObj.type !== 'image/png'
          && fileObj.type !== 'image/jpeg'
          && fileObj.type !== 'application/pdf'
        ) {
          this.fieldsValue.docIdentCopyFile.er = 'Можно загружать только .jpg, .png, .pdf файлы';
          return null;
        }
        if (fileObj.size / 1024 / 1024 > 2) {
          this.fieldsValue.docIdentCopyFile.er = 'Слишком большой файл';
          return null;
        }
        if (this.getDocs.length === 2) {
          this.fieldsValue.docIdentCopyFile.er = 'Можно загрузить только 2 файла';
          return null;
        }
        console.log(
          !(this.fieldsValue.docIdentCopyFile.er !== ''),
          this.fieldsValue.docIdentCopyFile.er,
        );
        if (!(this.fieldsValue.docIdentCopyFile.er !== '')) {
          const formData = new FormData();
          formData.append('file', fileObj);

          await this.$store.dispatch(`user/${POST_DOC}`, formData);
          await this.$store.dispatch(`user/${GET_DOC}`, formData);

          // this.userLoader = true;
          // const res = await this.fetchPostgetDocs(formData);
          // if (res.ok) {
          //   await this.fetchGetgetDocs();
          // }
          // this.userLoader = false;
          // console.log(res);
        }
      }
      return null;
    },
    setDefaultProfile() {
      this.localProfile = {
        ...this.profile,
      };
    },
    toggleCropper() {
      this.showCropper = !this.showCropper;
    },
    cropSuccess(imgDataUrl) {
      this.localProfile.avatar = imgDataUrl;
    },
    getData() {
      this.$store.dispatch(`user/${GET_DOC}`);
      if (!this.userData.email) {
        this.userData.photo = this.profile.avatar;
        this.userData.name = this.profile.firstName;
        this.userData.surname = this.profile.lastName;
        this.userData.email = this.profile.email;
        this.userData.username = this.profile.username;
      }
    },
    enable2faPrevStep() {
      this.options2FA.enableProcess.step -= 1;
    },
    enable2faNextStep() {
      if (this.options2FA.enableProcess.step !== 4) {
        this.options2FA.enableProcess.step += 1;
      }
    },
    async totpEnable() {
      try {
        await this.$axios.$post('/auth/totp/validate', {
          password: this.options2FA.enableProcess.password,
          totp: this.options2FA.enableProcess.code,
        });
        this.$store.commit('user/change2faStatus', true);
        this.enable2faCloseModal();
      } catch (e) {
        console.log(e);
      }
    },
    enable2faCloseModal() {
      this.options2FA.startEnablingProcess = false;
      this.options2FA.enableProcess = {
        step: 1,
        key: '',
        password: '',
        code: '',
      };
    },
    async enable2faOpenModal() {
      this.options2FA.startEnablingProcess = true;

      if (!this.options2FA.enableProcess.key) {
        try {
          const resp = await this.$axios.$get('/auth/totp/temp');

          if (resp.result.token) {
            this.options2FA.enableProcess.key = resp.result.token;
          } else {
            const resp = await this.$axios.$post('/auth/totp/enable');
            this.options2FA.enableProcess.key = resp.result.tempTotp;
          }
        } catch (e) {
          console.log(e);
        }
      }
    },

    disable2faCloseModal() {
      this.options2FA.startDisablingProcess = false;
      this.options2FA.disableProcess = {
        password: '',
        code: '',
      };
    },
    disable2faOpenModal() {
      this.options2FA.startDisablingProcess = true;
    },

    async totpDisable() {
      try {
        await this.$axios.$post('/auth/totp/disable', {
          password: this.options2FA.disableProcess.password,
          totp: this.options2FA.disableProcess.code,
        });
        this.$store.commit('user/change2faStatus', false);
        this.disable2faCloseModal();
      } catch (e) {
        console.log(e);
      }
    },
    toggleChangePassModal() {
      this.changePass.show = !this.changePass.show;

      this.changePass.oldPass = '';
      this.changePass.newPass = '';
      this.changePass.repeatNewPass = '';
    },

    toggleVerifyPhoneModal() {
      this.verifyPhone.show = !this.verifyPhone.show;
    },
    verifyPhoneRetryCode() {},
    verifyPhoneNext() {
      this.verifyPhone.step++;
    },

    editDataToggle() {
      this.isEditData = !this.isEditData;
    },
    checkEr() {
      this.fieldsInput.forEach((item) => {
        if (this.fieldsValue[item].required && this.localProfile[item] === '') {
          this.fieldsValue[item].er = 'Обязательное поле';
        }
        if (item === 'identityDocumentExpDate' && this.localProfile[item]) {
          const now = this.now.split('/');
          const expDate = this.localProfile[item].split('/');
          if (
            +expDate[2] < +now[2]
            || (+expDate[2] === +now[2] && +expDate[1] < +now[1])
            || (+expDate[2] === +now[2]
              && +expDate[1] === +now[1]
              && +expDate[0] < +now[0])
          ) {
            console.log('Истек');

            this.fieldsValue[item].er = 'Истек';
          }
        }
        // this.fieldsValue[item].er = 'test'
      });
      return (
        this.fieldsInput
          .map((item) => this.fieldsValue[item].er !== '')
          .indexOf(true) !== -1
      );
    },
    clearEr() {
      this.fieldsInput.forEach((item) => {
        this.fieldsValue[item].er = '';
      });
    },
    async changeUserData() {
      this.clearEr();
      // if (!this.checkEr()) {
      //   if (this.getProfileChanges.length !== 0) {
      //     const data = {};
      //     this.getProfileChanges.forEach(item => {
      //       data[item] = this.localProfile[item];
      //     });
      // console.log(data);
      //   }
      // }
      if (this.getProfileChanges.length === 0) {
        this.editDataToggle();
        return;
      }
      const avatarChanged = this.getProfileChanges.find((el) => el === 'avatar');
      const objToSend = avatarChanged
        ? this.localProfile
        : { ...this.localProfile, avatar: undefined };
      try {
        const res = await this.$store.dispatch(
          `user/${CHANGE_PROFILE}`,
          objToSend,
        );
        if (res && res.ok) {
          this.editDataToggle();
          this.$notify({
            type: 'success',
            text: res.message,
            closeOnClick: true,
          });
        } else {
          this.$notify({
            type: 'error',
            text: res?.errorField || res?.message,
            closeOnClick: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async changePassword() {
      await this.$axios.$put('/profile/me/password', {
        oldPassword: this.changePass.oldPass,
        newPassword: this.changePass.newPass,
      });
      this.toggleChangePassModal();
    },
  },
};
