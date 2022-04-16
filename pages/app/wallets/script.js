import { BTable } from 'bootstrap-vue';
import { mapGetters } from 'vuex';
import Qrcode from 'qrcode.vue';
import BigNumber from 'bignumber.js';
import vuescroll from 'vuescroll';
import { CurrencyDirective, parse } from 'vue-currency-input';
import Modal from '~/components/app/modal';
import financeFunc from '~/mixins/finance';
import helperFunc from '~/mixins/helpers';
import StakingComponent from '~/components/app/staking-component/staking-component.vue';
import Pagination from '~/components/app/pagination/pagination.vue';

import TwoFAModal from '~/components/app/modals/two-fa';
import math from '~/mixins/math.js';

export default {
  mixins: [financeFunc, helperFunc],
  layout: 'app',
  middleware: 'auth',
  components: {
    BTable,
    Modal,
    Qrcode,
    vuescroll,
    StakingComponent,
    Pagination,
    TwoFAModal,
  },
  data() {
    return {
      isShowSendModal: true,
      scrollOptions: {
        vuescroll: {
          mode: 'slide',
          zooming: false,
          scroller: {
            bouncing: false,
          },
        },
        scrollPanel: {
          scrollingY: false,
        },
        rail: {},
        bar: {
          background: '#2dccd3',
        },
      },
      promoWallet: [
        {
          icon: 'usd',
          ticker: 'USD',
        },
        {
          icon: 'eur',
          ticker: 'EUR',
        },
        {
          icon: 'gbp',
          ticker: 'GBP',
        },
        {
          icon: 'aed',
          ticker: 'AED',
        },
        {
          icon: 'cad',
          ticker: 'CAD',
        },
      ],
      walletsField: [
        {
          key: 'icon',
          label: this.$t('wallets.exchange.icon'),
          sortable: false,
        },
        {
          key: 'coin',
          label: this.$t('wallets.exchange.token'),
          sortable: false,
        },
        {
          key: 'ticker',
          label: this.$t('wallets.exchange.ticker'),
          sortable: false,
        },
        {
          key: 'balanceCrypto',
          label: this.$t('wallets.exchange.balance'),
          sortable: false,
        },
        {
          key: 'balanceToUsd',
          label: this.$t('wallets.exchange.usd_value'),
          sortable: false,
        },
        {
          key: 'buttons',
          label: '',
          sortable: false,
        },
      ],
      history: {},
      historyFields: [
        {
          key: 'updatedAt',
          label: this.$t('wallets.history.date'),
          sortable: false,
        },
        {
          key: 'deposit',
          label: this.$t('wallets.history.deposit'),
          sortable: false,
        },
        {
          key: 'withdrawal',
          label: this.$t('wallets.history.withdrawal'),
          sortable: false,
        },
        {
          key: 'currencyId',
          label: this.$t('wallets.history.token'),
          sortable: false,
        },
        {
          key: 'id',
          label: this.$t('wallets.history.id'),
          sortable: false,
        },
        {
          key: 'from',
          label: 'From',
          sortable: false,
        },
        {
          key: 'to',
          label: 'To',
          sortable: false,
        },
        {
          key: 'description',
          label: 'Details',
          sortable: false,
        },
        {
          key: 'status',
          label: 'Status',
          sortable: false,
        },
        {
          key: 'star',
          label: '',
          sortable: false,
        },
      ],
      showEnable2FAModal: false,

      depositQRSize: 255,
      currentDeposit: null,
      currentWithdraw: null,
      currentSend: null,

      withdrawAmount: 0,
      withdrawRecipient: '',
      withdraw2FA: '',
      selectHDP: false,
    };
  },
  computed: {
    ...mapGetters({
      wallets: 'user/getWallets',
      decimals: 'user/getDecimals',
      is2FA: 'user/is2FA',
    }),
    historyCountOfPage() {
      return Math.ceil(this.history.count / this.historyCountPerPage);
    },
    currencyOptionsSend() {
      return {
        currency: null,
        allowNegative: false,
        precision: { min: 2, max: this.currentSend.decimals },
        valueRange: {
          min: this.currentSend.valueMin || 0,
          max:
            this.calculateMaxAmount(
              this.currentSend.balanceCrypto,
              this.currentSend.feeRelative,
              this.currentSend.feeFixed,
              this.currentSend.decimals,
            ) || 0,
        },
      };
    },
    currencyOptionsWith() {
      return {
        currency: null,
        allowNegative: false,
        precision: { min: 2, max: this.currentWithdraw.decimals },
        valueRange: {
          min: this.currentWithdraw.valueMin || 0,
          max:
            this.calculateMaxAmount(
              this.currentWithdraw.balanceCrypto,
              this.currentWithdraw.feeRelative,
              this.currentWithdraw.feeFixed,
              this.currentWithdraw.decimals,
            ) || 0,
        },
      };
    },
    totalSend() {
      let value = this.withdrawAmount;
      if (typeof value === 'string') {
        value = Number(value.replace(',', '.'));
      }
      return value;
    },
  },
  mounted() {
    window.addEventListener('resize', this.adaptiveQR);
    this.adaptiveQR();
    try {
      this.getHistory();
    } catch (error) {
      console.log(error);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adaptiveQR);
  },
  methods: {
    step1Tostep2() {
      $('.Funds-Step1').css('display', 'none');
      $('.Funds-Step2').css('display', 'block');
    },
    step2Tostep1() {
      $('.Funds-Step2').css('display', 'none');
      $('.Funds-Step1').css('display', 'block');
    },
    step2Tostep3() {
      $('.Funds-Step2').css('display', 'none');
      $('.Funds-Step3').css('display', 'block');
    },
    step3Tostep1() {
      $('.Funds-Step3').css('display', 'none');
      $('.Funds-Step1').css('display', 'block');
    },
    HedpayToExternal() {
      $('.Transfer-within-hedpay').css('display', 'none');
      $('.Transfer-to-external').css('display', 'block');
      $('.hedpay_button').css('background-color', 'white');
      $('.hedpay_button').css('color', 'black');
      $('.external_button').css('background-color', 'black');
      $('.external_button').css('color', 'white');
    },
    ExterenalToHedpay() {
      $('.Transfer-to-external').css('display', 'none');
      $('.Transfer-within-hedpay').css('display', 'block');
      $('.hedpay_button').css('background-color', 'black');
      $('.hedpay_button').css('color', 'white');
      $('.external_button').css('background-color', 'white');
      $('.external_button').css('color', 'black');
    },
    HedpayToSubmit() {
      $('.Transfer-Internal-External').css('display', 'none');
      $('.Transfers-within-hedpay-Step2').css('display', 'block');
    },
    GoToHedpay() {
      $('.Transfer-Internal-External').css('display', 'block');
      $('.Transfers-within-hedpay-Step2').css('display', 'none');
    },
    ExternalToSubmit() {
      $('.Transfer-Internal-External').css('display', 'none');
      $('.External-Step2').css('display', 'block');
    },
    GoToExternal() {
      $('.Transfer-Internal-External').css('display', 'block');
      $('.External-Step2').css('display', 'none');
    },
    selectCurrency(e) {
      console.log('e', e.target.value);
      if (e.target.value == 'HDP') {
        return (this.selectHDP = !this.selectHDP);
      }
      if (this.selectHDP) {
        return this.selectHDP = false;
      }
    },
    GoToFAQ() {
      this.$router.push('/app/faq');
    },
    calculateTotal(balance, feeRelative, feeFixed) {
      let total = balance || 0;
      if (Number.isNaN(+total)) {
        total = total.replace(',', '.');
      }
      if (feeRelative) {
        const fee = new BigNumber(feeRelative).dividedBy(100);
        const multiplier = fee.plus(1);
        total = new BigNumber(total).multipliedBy(multiplier).toFixed(6);
      }
      if (feeFixed) {
        total = new BigNumber(total).plus(feeFixed).toFixed(6);
      }
      return Number(total);
    },
    adaptiveQR() {
      if (window.innerWidth > 768 && this.depositQRSize === 160) {
        this.depositQRSize = 255;
      } else if (window.innerWidth <= 768 && this.depositQRSize === 255) {
        this.depositQRSize = 160;
      }
    },
    toggleSendModal(wallet) {
      if (!this.is2FA) {
        this.openEnable2FAModal();
      } else if (wallet) {
        this.currentSend = wallet;
      } else {
        this.currentSend = null;

        this.withdrawAmount = 0;
        this.withdrawRecipient = '';
        this.withdraw2FA = '';
      }
    },
    toggleDepositModal(wallet) {
      if (wallet) {
        this.currentDeposit = wallet;
      } else {
        this.currentDeposit = null;
      }
    },
    openEnable2FAModal() {
      this.showEnable2FAModal = true;
    },
    closeEnable2FAModal() {
      this.showEnable2FAModal = false;
    },
    copyAddress() {
      if (window.isSecureContext) {
        navigator.clipboard
          .writeText(this.currentDeposit.address)
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
    async getHistory(payload) {
      const resp = await this.$axios.$get('/profile/me/txs', {
        params: {
          limit: payload ? payload.limit : 5,
          offset: payload ? payload.offset : 0,
        },
      });
      await this.GetFavorites();
      const favoriteContacts = this.$store.getters['favorites/getFavorites'];
      const operations = resp.result.txs;
      const modifiedOperations = this.addIsFavoriteContactInfo(
        operations,
        favoriteContacts,
      );
      resp.result.txs = [...modifiedOperations];
      this.history = resp.result;
    },
    addIsFavoriteContactInfo(operations, favorites) {
      return operations.map((operation) => {
        const { contact } = operation;
        const isFavorite = contact && contact.id
          ? favorites.some((favorite) => favorite.id === contact.id)
          : false;
        operation.isFavorite = isFavorite;
        return operation;
      });
    },
    async toggleWithdrawModal(wallet) {
      console.log(wallet);
      await this.$store.dispatch('user/GET_2FA_STATUS');
      if (!this.is2FA) {
        this.openEnable2FAModal();
      } else if (wallet) {
        this.currentWithdraw = wallet;
      } else {
        this.currentWithdraw = null;

        this.withdrawAmount = 0;
        this.withdrawRecipient = '';
        this.withdraw2FA = '';
      }
    },
    async vWithdrawSend() {
      try {
        let formWithdraw = parse(this.withdrawAmount, this.currencyOptionsSend);
        formWithdraw = new BigNumber(formWithdraw)
          .shiftedBy(this.currentSend.decimals)
          .toFixed(0, 1);
        const data = {
          amount: formWithdraw,
          totp: this.withdraw2FA,
        };
        if (this.withdrawRecipient.length <= 15) {
          data.username = this.withdrawRecipient;
        } else {
          data.address = this.withdrawRecipient;
        }
        await this.$axios.post(
          `/profile/me/wallet/${this.currentSend.id}/send`,
          data,
        );
        this.currentWithdraw = null;
        this.$notify({
          type: 'success',
          text:
            'Your request is accepted. After receiving the necessary number of confirmations from the network, the funds will be credited to your wallet',
        });
      } catch (error) {
        console.log(error);
      }
    },
    async withdrawSend() {
      try {
        let formWithdraw = parse(this.withdrawAmount, this.currencyOptionsWith);
        formWithdraw = new BigNumber(formWithdraw)
          .shiftedBy(this.currentWithdraw.decimals)
          .toFixed(0, 1);
        await this.$axios.post(
          `/profile/me/wallet/${this.currentWithdraw.id}/withdraw`,
          {
            address: this.withdrawRecipient,
            amount: formWithdraw,
            totp: this.withdraw2FA,
          },
        );
        this.currentWithdraw = null;
        this.$notify({
          type: 'success',
          text:
            'Your request is accepted. After receiving the necessary number of confirmations from the network, the funds will be credited to your wallet',
        });
      } catch (error) {
        console.log(error);
      }
    },
    calculateMaxAmount(balance, feeRelative, feeFixed, decimals) {
      let value = new BigNumber(balance);
      if (feeFixed) {
        value = value.minus(feeFixed);
      }
      if (feeRelative) {
        const fee = new BigNumber(feeRelative).dividedBy(100);
        const denominator = fee.plus(1);
        value = value.dividedBy(denominator);
      }
      value = Number(value.toFixed(decimals, 1));
      if (isNaN(value)) return 0;
      return value > 0 ? value : 0;
    },
    setMaxAmount() {
      this.withdrawAmount = this.calculateMaxAmount(
        this.currentWithdraw.balanceCrypto,
        this.currentWithdraw.feeRelative,
        this.currentWithdraw.feeFixed,
        6,
      );
      this.withdrawAmount = this.withdrawAmount.toString().replace('.', ',');
      // this.withdrawAmount = this.withdrawAmount.toFixed(
      //   this.currentWithdraw.decimals,
      // );
    },
    setMaxAmountSend() {
      this.withdrawAmount = this.currentSend.balanceCrypto;
      this.withdrawAmount = this.withdrawAmount.toString().replace('.', ',');
      // this.withdrawAmount = this.withdrawAmount.toFixed(
      //   this.currentSend.decimals,
      // );
    },
    beautifyAmount(value) {
      let newVal = value;
      if (typeof value === 'string') {
        newVal = Number(value.replace(',', '.'));
      }
      return Number(newVal.toFixed(6, 0));
    },
    async onFavoriteClick(operation) {
      if (operation.contact && !operation.isFavorite) {
        await this.ToFavorite(operation.contact.id);
      } else {
        await this.DeleteFavorite(operation.contact.id);
      }
      await this.getHistory();
    },

  },
  directives: {
    currency: CurrencyDirective,
  },

};
