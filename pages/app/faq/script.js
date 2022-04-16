import packageCard from '~/components/app/package-card';
import Modal from '~/components/app/modal';
import NumericInput from '~/components/app/numeric-input/NumericInput.vue';

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
      category1: true,
      category2: false,
      category3: false,
      category4: false,
      category5: false,
      category6: false,
      category7: false,
      about1: false,
      about2: false,
      about3: false,
      about4: false,
      about5: false,
      about6: false,
      about7: false,
      about8: false,
      about9: false,
      account1: false,
      account2: false,
      account3: false,
      account4: false,
      account5: false,
      account6: false,
      account7: false,
      account8: false,
      account9: false,
      fundpacakge1: false,
      fundpacakge2: false,
      fundpacakge3: false,
      fundpacakge4: false,
      fundpacakge5: false,
      fundpacakge6: false,
      fundpacakge7: false,
      fundpacakge8: false,
      fundpacakge9: false,
      fundpacakge10: false,
      fundpacakge11: false,
      fundpacakge12: false,
      fundpacakge13: false,
      mcwallet1: false,
      mcwallet2: false,
      mcwallet3: false,
      mcwallet4: false,
      mcwallet5: false,
      mcwallet6: false,
      mcwallet7: false,
      fundtransfer1: false,
      fundtransfer2: false,
      fundtransfer3: false,
      fundtransfer4: false,
      fundtransfer5: false,
      fundtransfer6: false,
      fundtransfer7: false,
      fundtransfer8: false,
      fundtransfer9: false,
      fundtransfer10: false,
      fundtransfer11: false,
      fundtransfer12: false,
      fundtransfer13: false,
      fundtransfer14: false,
      fundtransfer15: false,
      accessapp1: false,
      accessapp2: false,
      accessapp3: false,
      accessapp4: false,
      registeration1: false,
      registeration2: false,
      registeration3: false,
      registeration4: false,
      registeration5: false,
      registeration6: false,
      registeration7: false,
      registeration8: false,
      registeration9: false,
      registeration10: false,
    };
  },
  methods: {
    Category(param) {
      if (param == 'Category1') {
        this.category1 = true;
        this.category2 = false;
        this.category3 = false;
        this.category4 = false;
        this.category5 = false;
        this.category6 = false;
        this.category7 = false;
        $('#Category1').css('background', '#2DCCD3');
        $('#Category2').css('background', 'rgb(239, 239, 239)');
        $('#Category3').css('background', 'rgb(239, 239, 239)');
        $('#Category4').css('background', 'rgb(239, 239, 239)');
        $('#Category5').css('background', 'rgb(239, 239, 239)');
        $('#Category6').css('background', 'rgb(239, 239, 239)');
        $('#Category7').css('background', 'rgb(239, 239, 239)');
      }
      if (param == 'Category2') {
        this.category1 = false;
        this.category2 = true;
        this.category3 = false;
        this.category4 = false;
        this.category5 = false;
        this.category6 = false;
        this.category7 = false;
        $('#Category1').css('background', 'rgb(239, 239, 239)');
        $('#Category2').css('background', '#2DCCD3');
        $('#Category3').css('background', 'rgb(239, 239, 239)');
        $('#Category4').css('background', 'rgb(239, 239, 239)');
        $('#Category5').css('background', 'rgb(239, 239, 239)');
        $('#Category6').css('background', 'rgb(239, 239, 239)');
        $('#Category7').css('background', 'rgb(239, 239, 239)');
      }
      if (param == 'Category3') {
        this.category1 = false;
        this.category2 = false;
        this.category3 = true;
        this.category4 = false;
        this.category5 = false;
        this.category6 = false;
        this.category7 = false;
        $('#Category1').css('background', 'rgb(239, 239, 239)');
        $('#Category2').css('background', 'rgb(239, 239, 239)');
        $('#Category3').css('background', '#2DCCD3');
        $('#Category4').css('background', 'rgb(239, 239, 239)');
        $('#Category5').css('background', 'rgb(239, 239, 239)');
        $('#Category6').css('background', 'rgb(239, 239, 239)');
        $('#Category7').css('background', 'rgb(239, 239, 239)');
      }
      if (param == 'Category4') {
        this.category1 = false;
        this.category2 = false;
        this.category3 = false;
        this.category4 = true;
        this.category5 = false;
        this.category6 = false;
        this.category7 = false;
        $('#Category1').css('background', 'rgb(239, 239, 239)');
        $('#Category2').css('background', 'rgb(239, 239, 239)');
        $('#Category3').css('background', 'rgb(239, 239, 239)');
        $('#Category4').css('background', '#2DCCD3');
        $('#Category5').css('background', 'rgb(239, 239, 239)');
        $('#Category6').css('background', 'rgb(239, 239, 239)');
        $('#Category7').css('background', 'rgb(239, 239, 239)');
      }
      if (param == 'Category5') {
        this.category1 = false;
        this.category2 = false;
        this.category3 = false;
        this.category4 = false;
        this.category5 = true;
        this.category6 = false;
        this.category7 = false;
        $('#Category1').css('background', 'rgb(239, 239, 239)');
        $('#Category2').css('background', 'rgb(239, 239, 239)');
        $('#Category3').css('background', 'rgb(239, 239, 239)');
        $('#Category4').css('background', 'rgb(239, 239, 239)');
        $('#Category5').css('background', '#2DCCD3');
        $('#Category6').css('background', 'rgb(239, 239, 239)');
        $('#Category7').css('background', 'rgb(239, 239, 239)');
      }
      if (param == 'Category6') {
        this.category1 = false;
        this.category2 = false;
        this.category3 = false;
        this.category4 = false;
        this.category5 = false;
        this.category6 = true;
        this.category7 = false;
        $('#Category1').css('background', 'rgb(239, 239, 239)');
        $('#Category2').css('background', 'rgb(239, 239, 239)');
        $('#Category3').css('background', 'rgb(239, 239, 239)');
        $('#Category4').css('background', 'rgb(239, 239, 239)');
        $('#Category5').css('background', 'rgb(239, 239, 239)');
        $('#Category6').css('background', '#2DCCD3');
        $('#Category7').css('background', 'rgb(239, 239, 239)');
      }
      if (param == 'Category7') {
        this.category1 = false;
        this.category2 = false;
        this.category3 = false;
        this.category4 = false;
        this.category5 = false;
        this.category6 = false;
        this.category7 = true;
        $('#Category1').css('background', 'rgb(239, 239, 239)');
        $('#Category2').css('background', 'rgb(239, 239, 239)');
        $('#Category3').css('background', 'rgb(239, 239, 239)');
        $('#Category4').css('background', 'rgb(239, 239, 239)');
        $('#Category5').css('background', 'rgb(239, 239, 239)');
        $('#Category6').css('background', 'rgb(239, 239, 239)');
        $('#Category7').css('background', '#2DCCD3');
      }
    },
    OpenAboutHedpay(param) {
      if (param == 'AboutHedpay1') {
        this.about1 = !this.about1;
      }
      if (param == 'AboutHedpay2') {
        this.about2 = !this.about2;
      }
      if (param == 'AboutHedpay3') {
        this.about3 = !this.about3;
      }
      if (param == 'AboutHedpay4') {
        this.about4 = !this.about4;
      }
      if (param == 'AboutHedpay5') {
        this.about5 = !this.about5;
      }
      if (param == 'AboutHedpay6') {
        this.about6 = !this.about6;
      }
      if (param == 'AboutHedpay7') {
        this.about7 = !this.about7;
      }
      if (param == 'AboutHedpay8') {
        this.about8 = !this.about8;
      }
      if (param == 'AboutHedpay9') {
        this.about9 = !this.about9;
      }
    },
    OpenHedpayAccount(param) {
      if (param == 'HedpayAccount1') {
        this.account1 = !this.account1;
      }
      if (param == 'HedpayAccount2') {
        this.account2 = !this.account2;
      }
      if (param == 'HedpayAccount3') {
        this.account3 = !this.account3;
      }
      if (param == 'HedpayAccount4') {
        this.account4 = !this.account4;
      }
      if (param == 'HedpayAccount5') {
        this.account5 = !this.account5;
      }
      if (param == 'HedpayAccount6') {
        this.account6 = !this.account6;
      }
      if (param == 'HedpayAccount7') {
        this.account7 = !this.account7;
      }
      if (param == 'HedpayAccount8') {
        this.account8 = !this.account8;
      }
      if (param == 'HedpayAccount9') {
        this.account9 = !this.account9;
      }
    },
    OpenHedpayFundPackage(param) {
      if (param == 'HedpayFundPackage1') {
        this.fundpacakge1 = !this.fundpacakge1;
      }
      if (param == 'HedpayFundPackage2') {
        this.fundpacakge2 = !this.fundpacakge2;
      }
      if (param == 'HedpayFundPackage3') {
        this.fundpacakge3 = !this.fundpacakge3;
      }
      if (param == 'HedpayFundPackage4') {
        this.fundpacakge4 = !this.fundpacakge4;
      }
      if (param == 'HedpayFundPackage5') {
        this.fundpacakge5 = !this.fundpacakge5;
      }
      if (param == 'HedpayFundPackage6') {
        this.fundpacakge6 = !this.fundpacakge6;
      }
      if (param == 'HedpayFundPackage7') {
        this.fundpacakge7 = !this.fundpacakge7;
      }
      if (param == 'HedpayFundPackage8') {
        this.fundpacakge8 = !this.fundpacakge8;
      }
      if (param == 'HedpayFundPackage9') {
        this.fundpacakge9 = !this.fundpacakge9;
      }
      if (param == 'HedpayFundPackage10') {
        this.fundpacakge10 = !this.fundpacakge10;
      }
      if (param == 'HedpayFundPackage11') {
        this.fundpacakge11 = !this.fundpacakge11;
      }

      if (param == 'HedpayFundPackage12') {
        this.fundpacakge12 = !this.fundpacakge12;
      }

      if (param == 'HedpayFundPackage13') {
        this.fundpacakge13 = !this.fundpacakge13;
      }
    },
    OpenMcWallet(param) {
      if (param == 'HedpayMcWallet1') {
        this.mcwallet1 = !this.mcwallet1;
      }
      if (param == 'HedpayMcWallet2') {
        this.mcwallet2 = !this.mcwallet2;
      }
      if (param == 'HedpayMcWallet3') {
        this.mcwallet3 = !this.mcwallet3;
      }
      if (param == 'HedpayMcWallet4') {
        this.mcwallet4 = !this.mcwallet4;
      }
      if (param == 'HedpayMcWallet5') {
        this.mcwallet5 = !this.mcwallet5;
      }
      if (param == 'HedpayMcWallet6') {
        this.mcwallet6 = !this.mcwallet6;
      }
      if (param == 'HedpayMcWallet7') {
        this.mcwallet7 = !this.mcwallet7;
      }
    },
    OpenFundTransfer(param) {
      if (param == 'FundTransfer1') {
        this.fundtransfer1 = !this.fundtransfer1;
      }
      if (param == 'FundTransfer2') {
        this.fundtransfer2 = !this.fundtransfer2;
      }
      if (param == 'FundTransfer3') {
        this.fundtransfer3 = !this.fundtransfer3;
      }
      if (param == 'FundTransfer4') {
        this.fundtransfer4 = !this.fundtransfer4;
      }
      if (param == 'FundTransfer5') {
        this.fundtransfer5 = !this.fundtransfer5;
      }
      if (param == 'FundTransfer6') {
        this.fundtransfer6 = !this.fundtransfer6;
      }
      if (param == 'FundTransfer7') {
        this.fundtransfer7 = !this.fundtransfer7;
      }
      if (param == 'FundTransfer8') {
        this.fundtransfer8 = !this.fundtransfer8;
      }
      if (param == 'FundTransfer9') {
        this.fundtransfer9 = !this.fundtransfer9;
      }
      if (param == 'FundTransfer10') {
        this.fundtransfer10 = !this.fundtransfer10;
      }
      if (param == 'FundTransfer11') {
        this.fundtransfer11 = !this.fundtransfer11;
      }
      if (param == 'FundTransfer12') {
        this.fundtransfer12 = !this.fundtransfer12;
      }
      if (param == 'FundTransfer13') {
        this.fundtransfer13 = !this.fundtransfer13;
      }
      if (param == 'FundTransfer14') {
        this.fundtransfer14 = !this.fundtransfer14;
      }
      if (param == 'FundTransfer15') {
        this.fundtransfer15 = !this.fundtransfer15;
      }
    },
    OpenAccessApp(param) {
      if (param == 'AccessApp1') {
        this.accessapp1 = !this.accessapp1;
      }
      if (param == 'AccessApp2') {
        this.accessapp2 = !this.accessapp2;
      }
      if (param == 'AccessApp3') {
        this.accessapp3 = !this.accessapp3;
      }
      if (param == 'AccessApp4') {
        this.accessapp4 = !this.accessapp4;
      }
    },
    OpenRegisteration(param) {
      if (param == 'Registeration1') {
        this.registeration1 = !this.registeration1;
      }
      if (param == 'Registeration2') {
        this.registeration2 = !this.registeration2;
      }
      if (param == 'Registeration3') {
        this.registeration3 = !this.registeration3;
      }
      if (param == 'Registeration4') {
        this.registeration4 = !this.registeration4;
      }
      if (param == 'Registeration5') {
        this.registeration5 = !this.registeration5;
      }
      if (param == 'Registeration6') {
        this.registeration6 = !this.registeration6;
      }
      if (param == 'Registeration7') {
        this.registeration7 = !this.registeration7;
      }
      if (param == 'Registeration8') {
        this.registeration8 = !this.registeration8;
      }
      if (param == 'Registeration9') {
        this.registeration9 = !this.registeration9;
      }
      if (param == 'Registeration10') {
        this.registeration10 = !this.registeration10;
      }
    },
  },
};
