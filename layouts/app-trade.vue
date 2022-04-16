<template>
  <div>
    <client-only>
      <div class="app">
        <div class="app__left">
          <sidebar />
        </div>
        <div
          class="app__right"
          :style="{maxWidth: sidebarWidth ? `calc(100vw - ${sidebarWidth+15}px` : '100vw'}"
        >
          <toolbar />
          <main class="main-trade">
            <nuxt />
          </main>
        </div>

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
import toolbar from '~/components/app/toolbar';
import Notification from '~/components/app/notification/notification.vue';

export default {
  components: {
    sidebar,
    toolbar,
    Notification,
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
    //display: grid;
    //grid-template-rows: min-content max-content;
  }

  main {
    padding: 10px 35px;
    @media (max-width: 768px) {
      padding: 10px 20px;
      padding-top: 116px;
    }
    @media (max-width: 425px) {
      padding: 10px;
      padding-top: 100px;
    }
  }
}
main.main-trade {
  padding: 0;
  position: absolute;
  top: 90px;
  bottom: 0;
  left: 285px;
  right: 0;
}
.app__right {
  //max-height: 100vh;
  //height: 100vh;
}
</style>
