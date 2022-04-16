<template>
  <div v-if="value" class="hedpay-notifications">
    <page-component>
      <template #head-left>Notifications</template>
      <template>
        <div class="notif-body">
          <simple-notification v-for="(item, i) in notifications" :key="`notif__item-${i}`" :data="item"></simple-notification>
<!--          <simple-notification></simple-notification>-->
<!--          <simple-notification></simple-notification>-->
<!--          <simple-notification></simple-notification>-->
        </div>
      </template>
      <template #head-right>
        <button @click="hide" class="close-button">
          <img src="~assets/img/modal-cross.svg" alt="Close">
        </button>
      </template>
    </page-component>
  </div>
</template>

<script>
import { Client } from '@hapi/nes/lib/client';
import ClickOutside from 'vue-click-outside';
import { mapGetters } from 'vuex';
import { GET_NOTIFICATIONS } from '@/store/user/consts';
import PageComponent from '../page-component';
import SimpleNotification from '../simple-notification/SimpleNotification';

export default {
  name: 'HedpayNotifications',
  props: ['value'],
  components: {
    SimpleNotification,
    PageComponent,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      notifications: 'user/getNotificationsReverse',
      connection: 'connectionStatus',
    }),
  },
  watch: {
    connection() {
      if (this.connection) {
        this.subscribeOnNotifications();
        this.fetchNotifications();
      }
    },
  },
  mounted() {
    this.popupItem = this.$el;
    //   this.connect();
  },
  methods: {
    unique(arr) {
      const result = [];

      for (const str of arr) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }

      return result;
    },
    async fetchNotifications() {
      await this.$store.dispatch(`user/${GET_NOTIFICATIONS}`);
    },
    async subscribeOnNotifications() {
      const client = new Client(this.NotificationSocketUrl);
      const { payload } = await this.$connection.request('/api/profile/me/notify-subscribe');
      if (payload.id) this.$connection.subscribe(`/notifications/${payload.id}`, this.notify);
    },
    notify(update) {
      this.$store.commit('user/pushNotification', update);
    },
    hide() {
      this.$emit('input', false);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
 .hedpay-notifications {
   position: absolute;
   top: 100px;
   z-index: 42;
   .notif-body {
      overflow-y: auto;
      max-height: 547px;
   }
   @media (max-width: 768px) {
     position: fixed;
     width: 100%;
     top: 84px;
     left: 0;
   }
   .close-button {
     background-color: transparent;
   }
 }
</style>
