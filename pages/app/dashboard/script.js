import { BTable } from 'bootstrap-vue';
import { mapGetters } from 'vuex';
import vuescroll from 'vuescroll';
import BigNumber from 'bignumber.js';
import { CurrencyDirective, parse } from 'vue-currency-input';
import Tabs from '../../../components/app/tabs';
import RatesWidget from '~/components/app/rates-widget';
import Pagination from '~/components/app/pagination/pagination.vue';
import { GET_STAKING_DATA } from '../../../store/staking/consts';
import { GET_FAVORITES } from '../../../store/favorites/consts';
import { GET_WALLETS } from '~/store/user/consts';
import Modal from '~/components/app/modal';
import TwoFAModal from '~/components/app/modals/two-fa';
import UltimateDropdown from '~/components/app/ultimate-dropdown';
import math from '~/mixins/math.js';
import SendModal from '~/components/app/modals/send-modal';

import LineChart from '~/components/app/line-chart';
// todo - extract damn businnes logic outta here... wtf
export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    Tabs,
    BTable,
    'rates-widget': RatesWidget,
    vuescroll,
    Pagination,
    Modal,
    UltimateDropdown,
    TwoFAModal,
    BigNumber,
    SendModal,
    LineChart,
  },
  data() {
    return {
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
          coin: 'USD',
        },
        {
          icon: 'eur',
          ticker: 'EUR',
          coin: 'EUR',
        },
        {
          icon: 'gbp',
          ticker: 'GBP',
          coin: 'GBP',
        },
        {
          icon: 'aed',
          ticker: 'AED',
          coin: 'AED',
        },
        {
          icon: 'cad',
          ticker: 'CAD',
          coin: 'CAD',
        },
      ],
      balanceTab: 'list', // list, chart
      balanceTabs: ['list', 'chart'],
      walletChartSize: 241,

      myPackages: [

      ],
      myPackagesFields: [
        {
          key: 'name',
          label: this.$t('dashboard.packages.name'),
          sortable: false,
        },
        {
          key: 'tokens',
          label: this.$t('dashboard.packages.locked_tokens'),
          sortable: false,
        },
        {
          key: 'timeline',
          label: this.$t('dashboard.packages.timeline'),
          sortable: false,
        },
        {
          key: 'deadline',
          label: this.$t('dashboard.packages.lockdate'),
          sortable: false,
        },
        {
          key: 'lockdate',
          label: this.$t('dashboard.packages.deadline'),
          sortable: false,
        },
        {
          key: 'enddate',
          label: 'End date',
          sortable: false,
        },
        {
          key: 'earnings',
          label: this.$t('dashboard.packages.earnings'),
          sortable: false,
        },
        {
          key: 'amount',
          label: this.$t('wallets.exchange.total'),
          sortable: false,
        },
        {
          key: 'interest',
          label: this.$t('dashboard.packages.interest'),
          sortable: false,
        },
      ],

      isShowingCurrencySelect: false,
      currenciesToSelect: [],
      selectedWallet: null,
      showEnable2FAModal: false,
      withdrawRecipient: '',
      contactToSend: null,
      isShowingSendModal: false,
    };
  },
  computed: {
    ...mapGetters({
      wallets: 'user/getWallets',
      totalBalance: 'user/getTotalBalance',
      rates: 'user/getRates',
      stakingItems: 'staking/getData',
      favorites: 'favorites/getFavorites',
      is2FA: 'user/is2FA',
    }),
    walletsChart() {
      const sections = [];

      this.wallets.forEach((wallet) => {
        if (this.totalBalance) {
          if (wallet.balanceToUsd / this.totalBalance * 100) {
            sections.push({
              label: wallet.coin,
              value: this.totalBalance ? (wallet.balanceToUsd / this.totalBalance * 100) : 0,
              color: wallet.color,
            });
          }
        }
      });
      return sections;
    },
  },
  created() {
    this.apiGetStakingData();
    this.GetFavorites();
    document.addEventListener('resize', this.adaptiveChart);
    // setTimeout(() => {
    //   this.initChart();
    // }, 2000);
  },
  methods: {
    Switch() {
      alert('switch?');
      const from = $('.Currency-Type').val();
      const to = $('#Conversion-Type').text();

      const selectedto = $('#Fund').children(`li.${from}`);// switched
      const selectedFrom = $('#Fund').children(`li.${to}`);// switched

      $('#Fund-Button').html(selectedFrom);
      $('#Fund-Button').attr('value', to);
      $('#Fund').html(langArray);

      $('#Curr-Button').html(selectedto);
      $('#Curr-Button').attr('value', from);
      $('#Curr').html(langArray);

      // FOR EXCHANGE PAGE CONVERT STEP 2 //////////////////////
      $('.Currency-Type').val(to);
      $('.Currency-Type').text(to);
      $('#From').attr('src', `Icons/${to}.svg`);// for Convert-Step2

      $('.Conversion-Type').text(from);
      $('#Conversion-Type').text(from);
      $('#To').attr('src', `Icons/${from}.svg`);// for Convert-Step2
    },

    initChart() {
      alert('init');
      const lineChartCanvas = $('#lineChart').get(0).getContext('2d');

      const data = {
        labels: ['2013', '2014', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [
          {
            label: '3M',
            backgroundColor: '#2DCCD3',

            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],

            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
          {
            label: '6M',
            backgroundColor: '#2DCCD3',
            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
          {
            label: '1Y',
            backgroundColor: '#2DCCD3',
            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
          {
            label: '3Y',
            backgroundColor: '#2DCCD3',
            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
        ],
      };

      const options = {
        responsive: true,

        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false,
              borderDash: [3, 3],
            },
            ticks: {
              min: 0,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
              color: '#ffffff',
            },
          }],
        },
        elements: {
          line: {
            tension: 0.2,
          },
          point: {
            radius: 4,
          },
        },
        //   stepsize: 5000,

        title: {
          display: true,
          text: 'Show the chart',
          titleColor: '#2DCCD3',
          font: {
            size: 13,
            family: 'Roboto',
            weight: 'normal',
          },
        // padding: {
        //     bottom: 10
        // }
        },

        legend: {
          position: 'top',
        },
        plugins: {
          display: true,
          legend: true,

        },

      };
      const lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data,
        options,
      });
      console.log(lineChart);
    },

    calcAmount(item) {
      return new BigNumber(item.deposit).plus(item.receivable).plus(item.revenue).toNumber();
    },
    unlockDateConverter(item) {
      const date = new Date(item);
      date.setMonth(date.getMonth() + 3);
      return this.$d(new Date(date));
    },
    setBalanceTab(tab) {
      this.balanceTab = tab;
    },
    convertDate(date) {
      return new Date(date).getTime();
    },
    getTimeLine(date1, date2) {
      let percentage = Math.ceil(((new Date().getTime() - new Date(date1).getTime())
        / (new Date(date2).getTime() - new Date(date1).getTime())) * 100);
      if (percentage > 100) {
        percentage = 100;
      }
      return percentage;
    },
    async apiGetStakingData(payload = null) {
      try {
        await this.$store.dispatch(`staking/${GET_STAKING_DATA}`, payload);
      } catch (e) {
        console.log(e);
      }
    },
    setCurrency(option) {
      this.selectedWallet = option;
    },
    onCurrencySelect() {
      this.isShowingCurrencySelect = false;
      const address = this.extractWallet(this.contactToSend);
      if (!address) {
        return;
      }
      this.withdrawRecipient = address;
      if (!this.contactToSend) {
        return;
      }
      this.isShowingSendModal = true;
    },
    async sendMoneyToUser(contact) {
      if (!this.is2FA) {
        this.openEnable2FAModal();
      } else {
        await this.$store.dispatch(`user/${GET_WALLETS}`);
        this.selectedWallet = this.wallets[0];
        this.isShowingCurrencySelect = true;
        this.contactToSend = contact;
      }
    },
    extractWallet(contact) {
      if (contact.wallets && contact.wallets.length > 0) {
        const necessaryWallet = contact.wallets.find((el) => el.currencyId === this.selectedWallet.icon);
        if (necessaryWallet) {
          return necessaryWallet.address;
        }
      }
      return null;
    },
    async deleteFromFavorites(id) {
      await this.DeleteFavorite(id);
      await this.GetFavorites();
    },
    openEnable2FAModal() {
      this.showEnable2FAModal = true;
    },
    closeEnable2FAModal() {
      this.showEnable2FAModal = false;
    },
    closeSendModal() {
      this.isShowingSendModal = false;
    },
  },
  directives: {
    currency: CurrencyDirective,
  },
};
