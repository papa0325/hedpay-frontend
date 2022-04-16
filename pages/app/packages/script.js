import { mapGetters, mapActions } from 'vuex';
import BigNumber from 'bignumber.js';
import packageCard from '~/components/app/package-card';
import Modal from '~/components/app/modal';
import NumericInput from '~/components/app/numeric-input/NumericInput.vue';
import { GET_AVAILABLE_PACKAGES, BUY_PACKAGE } from '~/store/packages/consts';
import { GET_WALLETS } from '../../../store/user/consts';

export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    packageCard,
    Modal,
    NumericInput,
  },
  data() {
    return {
      packages: [
        {
          start_hdp: '10,000',
          end_hdp: '99,999',
          package_price: '1',
          annual_revenue: '6',
          id: '1',
        },
        {
          start_hdp: '100,000',
          end_hdp: '249,999',
          package_price: '0.80',
          annual_revenue: '9',
          id: '2',
        },
        {
          start_hdp: '250,000',
          end_hdp: '499,999',
          package_price: '0.60',
          annual_revenue: '12',
          id: '3',
        },
        {
          start_hdp: '500,000',
          end_hdp: '',
          package_price: '0.50',
          annual_revenue: '18',
          id: '4',
        },
      ],
      tokensToBuy: {},
      packagesObtained: [
        {
          amount: '10000 HDP',
          duration: '3 months',
          percentage: 10,
          packagesQuantity: '25 packages',
          progressBar: 90,
          isObtained: true,
        },
        {
          amount: '20000 HDP',
          duration: '6 months',
          percentage: 10,
          packagesQuantity: '25 packages',
          progressBar: 69,
          isObtained: true,
        },
        {
          amount: '30000 HDP',
          duration: '12 months',
          percentage: 10,
          packagesQuantity: '25 packages',
          progressBar: 69,
          isObtained: true,
        },
        {
          amount: '40000 HDP',
          duration: '18 months',
          percentage: 10,
          packagesQuantity: '25 packages',
          progressBar: 69,
          isObtained: true,
        },
      ],
      selectedProceed: false,
      choosePackage: false,
      modalStatus: false,
      // packagesAvailable: [
      //   {
      //     amount: 75000,
      //     price: 0.001,
      //     price_currency: 'ETH',
      //     min: 10,
      //     max: 700,
      //     currency: 'HDP',
      //     packagesQuantity: '75000 hdp left',
      //     progressBar: 69,
      //     isObtained: false,
      //   },
      //  {
      //     amount: 75000,
      //     price: 0.001,
      //     price_currency: 'ETH',
      //     min: 10,
      //     max: 700,
      //     currency: 'HDP',
      //     packagesQuantity: '75000 hdp left',
      //     progressBar: 69,
      //     isObtained: false,
      //     disabled: true
      //   },
      //    {
      //     amount: 75000,
      //     price: 0.001,
      //     price_currency: 'ETH',
      //     min: 10,
      //     max: 700,
      //     currency: 'HDP',
      //     packagesQuantity: '75000 hdp left',
      //     progressBar: 69,
      //     isObtained: false,
      //     disabled: true
      //   },
      //    {
      //     amount: 75000,
      //     price: 0.001,
      //     price_currency: 'ETH',
      //     min: 10,
      //     max: 700,
      //     currency: 'HDP',
      //     packagesQuantity: '75000 hdp left',
      //     progressBar: 69,
      //     isObtained: false,
      //     disabled: true
      //   },
      //    {
      //     amount: 75000,
      //     price: 0.001,
      //     price_currency: 'ETH',
      //     min: 10,
      //     max: 700,
      //     currency: 'HDP',
      //     packagesQuantity: '75000 hdp left',
      //     progressBar: 69,
      //     isObtained: false,
      //     disabled: true
      //   },
      //  {
      //     amount: 75000,
      //     price: 0.001,
      //     price_currency: 'ETH',
      //     min: 10,
      //     max: 700,
      //     currency: 'HDP',
      //     packagesQuantity: '75000 hdp left',
      //     progressBar: 69,
      //     isObtained: false,
      //     disabled: true
      //   },
      // ]
    };
  },
  computed: {
    ...mapGetters({
      packagesAvailable: 'packages/getPackages',
    }),
  },
  mounted() {
    this.$store.dispatch(`packages/${GET_AVAILABLE_PACKAGES}`);
  },
  methods: {
    setStatus(value) {
      this.tokensToBuy.status = value;
    },
    buyConfirmation() {
      this.setStatus('confirm');
    },
    calcThePrice(value) {
      const number = new BigNumber(value).multipliedBy(this.tokensToBuy.rate).toNumber();
      return number;
    },
    buy(pkg) {
      this.loadPackage(pkg);
    },
    loadPackage(payload) {
      this.tokensToBuy = {
        id: payload.id,
        amount: new BigNumber(payload.amountLeft).shiftedBy(-4),
        min: new BigNumber(payload.min).shiftedBy(-4),
        max: new BigNumber(payload.max).shiftedBy(-4),
        amountLeft: new BigNumber(payload.amountLeft).shiftedBy(-4),
        rate: payload.price,
        showModal: true,
        status: 'new',
      };
    },
    updatePackageData(id) {
      const index = this.packagesAvailable.findIndex((element) => element.id === id);
      if (index > -1) {
        const currentPackage = this.packagesAvailable[index];
        this.loadPackage(currentPackage);
      }
    },
    async purchase() {
      const payload = {
        id: this.tokensToBuy.id,
        amount: this.tokensToBuy.amount,
      };
      try {
        await this.$store.dispatch(`packages/${BUY_PACKAGE}`, payload);
        await this.$store.dispatch(`packages/${GET_AVAILABLE_PACKAGES}`);
        this.setStatus('success');
      } catch (e) {
        this.setStatus('error');
      }
      await this.$store.dispatch(`user/${GET_WALLETS}`);
    },
    proceed1(id) {
      $('.choosePackages').css('display', 'none');
      $('.selectedProceed').css('display', 'flex');
      // if (id == 1) {
      //   return (this.seletedProceed = !this.seletedProceed);
      // } else if (id == 2) {
      //   alert('2');
      // } else if (id == 3) {
      //   alert('3');
      // } else {
      //   alert('4');
      // }
    },
    GoBack() {
      $('.choosePackages').css('display', 'flex');
      $('.selectedProceed').css('display', 'none');
    },
    proceed2() {
      console.log('12');
      this.modalStatus = true;
    },
  },
};
