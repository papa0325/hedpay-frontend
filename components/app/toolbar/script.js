import { mapGetters } from 'vuex';
import { LOG_OUT } from '@/store/user/consts';
import Icon from '../icon';
import financeFuncs from '~/mixins/finance';
import HedpayNotifications from '../hedpay-notifications/HedpayNotifications';

export default {
  components: {
    Icon,
    HedpayNotifications,
  },
  data() {
    return {
      isNtfShown: false,
    };
  },
  mixins: [financeFuncs],
  computed: {
    rate() {
      return this.financeConvert('hdp.ф', 'usd');
    },
    ...mapGetters({
      notifications: 'user/getNotificationsReverse',
    }),
  },
  methods: {
    toggleSidebar() {
      EventBus.$emit('toggleSidebar');
    },
    toggleNotifications() {
      this.isNtfShown = !this.isNtfShown;
    },
    logOut() {
      this.$store.dispatch(`user/${LOG_OUT}`);
      this.$router.push('/sign-in');
    },
  },
};
