<template>
  <div>
    <client-only>
      <div class="app" style="flex-direction: column;">
        <div class="app__left" style="display: flex; flex-direction: column; background: #002554; height: 60px;">
          <topmenubar />
          <!-- <sidebar /> -->
        </div>
        <div
          class="app__right"
          :style="{maxWidth: sidebarWidth ? '100vw' : '100vw', paddingTop: '120px', width: '90%', margin: 'auto'}"
        >
          <!-- <toolbar /> -->
          <main>
            <nuxt />
          </main>
        </div>
        <footerbar />

        <portal-target name="modal" />
        <Notification
          class="notification-container"
          :style="{maxWidth: sidebarWidth ? `calc(100vw - ${sidebarWidth+15}px` : '100vw'}"
        />
        <div id="custom-alert" />
      </div>
    </client-only>
  </div>
</template>

<script>
import { LOG_OUT } from '@/store/user/consts';
import sidebar from '~/components/app/sidebar';
import topmenubar from '~/components/app/topmenubar';
import toolbar from '~/components/app/toolbar';
import Notification from '~/components/app/notification/notification.vue';
import footerbar from '~/components/app/footerbar';

export default {
  components: {
    sidebar,
    topmenubar,
    toolbar,
    Notification,
    footerbar,
  },
  data() {
    return {
      sidebarWidth: 0,
    };
  },
  created() {
    if (process.browser) {
      this.$store.dispatch('user/GET_RATES');
      window.addEventListener('beforeunload', () => {
        // this.$store.commit("user/logOut");
      });

      this.checkUserActiveStatus();
    }
  },
  mounted() {
    this.getSidebarWidth();
    EventBus.$on('chageSidebarWidth', this.getSidebarWidth);
  },
  methods: {
    // const sidebar = document.getElementById("sidebar");
    // this.sidebarWidth = getComputedStyle(sidebar).width;
    getSidebarWidth(isSlim) {
      if (window.innerWidth > 1024) {
        this.sidebarWidth = isSlim ? 96 : 285;
      } else if (window.innerWidth > 768) {
        this.sidebarWidth = 96;
      } else {
        this.sidebarWidth = 0;
      }
    },
    checkUserActiveStatus() {
      const noActiveDelay = 15 * 60000 * 2; // Колличество времени неактивности юзера требуемое для логаута
      let timeStamp = new Date().getTime(); // Время последней активности
      let noActiveTime = 0; // Текущее кол-во простоя
      let noActiveTimer = setInterval(checkActive(), 1000); // Таймер чекаюищий простой
      const self = this;

      const mouseMoveHandler = debounce(() => {
        noActiveTime = 0;
        timeStamp = new Date().getTime();

        clearInterval(noActiveTimer);
        noActiveTimer = setInterval(checkActive, 1000);
      }, 1000);

      document.addEventListener('mousemove', mouseMoveHandler);

      function checkActive() {
        const now = new Date().getTime();

        if (now >= timeStamp + noActiveDelay) {
          document.removeEventListener('mousemove', mouseMoveHandler);
          clearInterval(noActiveTimer);
          self.$store.dispatch(`user/${LOG_OUT}`);
          self.$router.push('/sign-in');
        } else {
          noActiveTimer + 1000;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  background: $background;
  background-attachment: fixed;
  @media (max-width: 768px) {
    display: block;
  }
  .notification-container {
    position: fixed;
    bottom: 56px !important;
    right: 0;
    width: 100%;
    padding: 0 35px;
    z-index: 99999;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-left: 96px;
  }
  &__right {
    flex: 1;
  }

  main {
    padding: 35px 20px 35px 10px;
    @media (max-width: 768px) {
      padding: 116px 10px 10px 10px;
    }
    @media (max-width: 425px) {
      padding: 100px 10px 10px 10px;
    }
  }
}
</style>
