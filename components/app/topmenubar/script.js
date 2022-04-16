import { mapGetters } from 'vuex';
import Icon from '../icon';
import { GET_USER } from '~/store/user/consts';
import { LOG_OUT } from '../../../store/user/consts';

export default {
  components: {
    Icon,
  },

  data() {
    return {
      isSlim: false,
      isMobileOpen: false,
    };
  },
  watch: {
    active() {
      this.isMobileOpen = false;
    },
  },
  computed: {
    ...mapGetters({
      profile: 'user/getProfile',
    }),
    active() {
      return this.$route.name.split('-').pop();
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeEvent);
    this.resizeEvent();

    EventBus.$on('toggleSidebar', () => {
      this.isMobileOpen = true;
      this.isSlim = false;
    });

    if (!Object.keys(this.profile).length) {
      this.fetchUser();
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeEvent);
  },
  methods: {
    fetchUser() {
      try {
        this.$store.dispatch(`user/${GET_USER}`);
      } catch (err) {
        console.log('err: ');
        console.dir(err);
      }
    },
    sidebarToggle() {
      this.isSlim = !this.isSlim;
      EventBus.$emit('chageSidebarWidth', this.isSlim);
    },
    resizeEvent() {
      if (window.innerWidth <= 1024 && window.innerWidth > 768 && !this.isSlim) {
        this.isSlim = true;
        EventBus.$emit('chageSidebarWidth', this.isSlim);
      } else if (window.innerWidth > 1024 && this.isSlim) {
        this.isSlim = false;
        EventBus.$emit('chageSidebarWidth', this.isSlim);
      } else if (window.innerWidth <= 768 && this.isSlim) {
        setTimeout(() => {
          this.isSlim = false;
          this.isMobileOpen = false;
          EventBus.$emit('chageSidebarWidth', this.isSlim);
        }, 300);
      }
    },
    logOut() {
      this.$store.dispatch(`user/${LOG_OUT}`);
      this.$router.push('/sign-in');
    },

    Referral() {
      console.log('123');
      this.$router.push('/referal');
    },
  },
};
