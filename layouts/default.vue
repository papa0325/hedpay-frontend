<template>
  <div class="default">
    <Header />
    <div class="content">
      <nuxt />
    </div>
    <Footer />
    <client-only>
      <Notification class="notification-container row" />
    </client-only>
  </div>
</template>

<script>
import Header from '~/components/landing/header';
import Footer from '~/components/landing/footer';
import Notification from '~/components/app/notification/notification.vue';

export default {
  components: {
    Header,
    Footer,
    Notification,
  },
  mounted() {
    this.$store.dispatch('user/GET_RATES');
  },
};
</script>

<style lang="scss">
.default {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    flex: 1;
    display: flex;
    padding: 80px 0 424px;
    @media (max-width: 508px) {
      padding-bottom: 500px;
    }
    & > div {
      flex: 1;
    }
  }
  .notification-container {
    right: 50%;
    transform: translateX(50%);
    bottom: 56px !important;
    z-index: 10;
    .vue-notification-wrapper {
      overflow: visible;
    }
  }
}
</style>
