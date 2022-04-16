// import CandlestickChart from '~/components/app/candlestick-chart';
import CandlestickChart from '~/components/app/candlestick-chart';

export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    CandlestickChart,
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
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    PriceLimit() {
      $('.market-trade').css('display', 'none');
      $('.price-limit').css('display', 'flex');
    },
    MarketTrade() {
      $('.market-trade').css('display', 'flex');
      $('.price-limit').css('display', 'none');
    },
    buySubmit1() {
      $('.market-trade').css('display', 'none');
      $('.price-limit').css('display', 'none');
      $('.purchase-confirmation').css('display', 'block');
      $('.btn-market').css('display', 'none');
      $('.btn-price').css('display', 'none');
    },
    sellSubmit1() {
      $('.market-trade').css('display', 'none');
      $('.price-limit').css('display', 'none');
      $('.sale-confirmation').css('display', 'block');
      $('.btn-market').css('display', 'none');
      $('.btn-price').css('display', 'none');
    },
    GoTo1() {
      $('.btn-market').css('display', 'block');
      $('.btn-price').css('display', 'block');
      $('.market-trade').css('display', 'flex');
      $('.purchase-confirmation').css('display', 'none');
    },
    GoTo2() {
      $('.btn-market').css('display', 'block');
      $('.btn-price').css('display', 'block');
      $('.market-trade').css('display', 'flex');
      $('.sale-confirmation').css('display', 'none');
    },
    buySubmit2() {
      $('.market-trade').css('display', 'none');
      $('.price-limit').css('display', 'none');
      $('.pricelimit-buy-confirmation').css('display', 'block');
      $('.btn-market').css('display', 'none');
      $('.btn-price').css('display', 'none');
    },
    sellSubmit2() {
      $('.market-trade').css('display', 'none');
      $('.price-limit').css('display', 'none');
      $('.pricelimit-sell-confirmation').css('display', 'block');
      $('.btn-market').css('display', 'none');
      $('.btn-price').css('display', 'none');
    },
    GoTo3() {
      $('.btn-market').css('display', 'block');
      $('.btn-price').css('display', 'block');
      $('.price-limit').css('display', 'flex');
      $('.pricelimit-buy-confirmation').css('display', 'none');
    },
    GoTo4() {
      $('.btn-market').css('display', 'block');
      $('.btn-price').css('display', 'block');
      $('.price-limit').css('display', 'flex');
      $('.pricelimit-sell-confirmation').css('display', 'none');
    },

  },
  directives: {
  },
};
