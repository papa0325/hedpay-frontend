import { mapGetters } from 'vuex';
import moment from 'moment';
import { GET_REFERAL_LINK, SEND_REFERAL_INVITE, GET_BONUSES } from '../../../store/user/consts';

export default {
  layout: 'app',
  middleware: 'auth',
  data: () => ({
    sendEmail: '',
    sendMsg: '',
    sendLoading: false,
    showSendSuccessMsg: false,
    er: [],
  }),
  computed: {
    ...mapGetters({
      getReferalData: 'user/getReferalData',
      getReferalBonuses: 'user/getReferalBonuses',
    }),
    getReferalLink() {
      if (this.getReferalData.hasOwnProperty('refLink')) {
        return `${window.location.host}/?ref=${this.getReferalData.refLink}`;
      }
      return '-';
    },
    getReferalAmount() {
      return this.getReferalData.amount || '0';
    },
    getReferalInvitationCount() {
      return this.getReferalData.invitationCount || '0';
    },
    getReferalUsersCount() {
      return this.getReferalData.usersCount || '0';
    },
  },
  mounted() {
    this.fetchBonuses();
  },
  methods: {
    formDate(value) {
      const date = new Date(value);
      return moment(String(date)).format('DD/MM/YYYY');
    },
    getEr(i) {
      return this.er.indexOf(i) !== -1;
    },
    checkSendInvite() {
      const emailRegex = /^[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
      if (this.sendEmail === '') {
        this.er.push(0);
      } else if (
        this.sendEmail.match(emailRegex) === null
      ) {
        this.er.push(1);
      }
      if (this.sendMsg === '') {
        this.er.push(2);
      }
      return this.er.length === 0;
    },
    async fetchBonuses() {
      try {
        await this.$store.dispatch(`user/${GET_BONUSES}`);
        // eslint-disable-next-line no-empty
      } catch (res) {
      }
    },
    async preluderSendInvite() {
      this.er = [];
      if (this.checkSendInvite()) {
        const refLink = this.getReferalLink;
        const data = {
          email: this.sendEmail,
          text: this.sendMsg,
          refLink,
        };
        this.sendLoading = true;
        try {
          const res = await this.$store.dispatch(`user/${SEND_REFERAL_INVITE}`, data);
          this.sendLoading = false;
          if (res.ok) {
            await this.$store.dispatch(`user/${GET_REFERAL_LINK}`);
            this.showSendSuccessMsg = true;
            this.sendEmail = '';
            this.sendMsg = '';
            setTimeout(() => {
              this.showSendSuccessMsg = false;
            }, 5000);
          }
        } catch (res) {
          this.sendLoading = false;
          const { data } = res.response;
          if (!data.ok && data.data[0].field === 'email') {
            this.er.push(1);
          }
        }
      }
    },
    copy(value) {
      if (window.isSecureContext) {
        navigator.clipboard
          .writeText(value)
          .then(() => {
            this.$notify({
              type: 'success',
              text: 'Successfully copied',
              closeOnClick: true,
            });
          })
          .catch(() => {
            console.log('copy failed');
          });
      }
    },
  },
};
