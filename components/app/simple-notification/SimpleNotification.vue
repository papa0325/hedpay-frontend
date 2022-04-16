<template>
    <div class="simple-notification">
      <img src="~assets/img/notifications/def.svg" alt="icon" class="notification-icon">
      <div class="notification-body">
        <div class="top">
          <span class="title">
            {{data.meta.subject}}
          </span>
          <span class="time-date">
            {{ getFormatDate(now - new Date(data.createdAt))}}
          </span>
        </div>
        <div class="text">
          {{data.meta.message}}
        </div>
        <div class="notifications-buttons">
          <button @click="fetchToWallet()" class="transparent-button">To wallet</button>
          <button @click="fetchToStake()" class="green-button">To stake</button>
        </div>
      </div>
    </div>
</template>

<script>
import { STACKING_TO_STAKE, STACKING_TO_WALLET, GET_USER } from '@/store/user/consts';
import { GET_STAKING_DATA } from '@/store/staking/consts';

export default {
  props: {
    data: Object,
  },
  data: () => ({
    now: '',
    timer: null,
  }),
  name: 'SimpleNotification',
  created() {
    this.now = new Date();
    this.timer = setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    async fetchToStake() {
      const data = {
        approveToken: this.data.meta.approveToken,
        nId: this.data.id,
      };
      try {
        const res = await this.$store.dispatch(`user/${STACKING_TO_STAKE}`, data);
        if (res.ok) {
          this.$notify({
            type: 'success',
            text: this.$t('wallets.notification.successStacking'),
            closeOnClick: true,
          });
          this.$store.commit('user/delNotification', this.data.id);
          this.$store.dispatch(`staking/${GET_STAKING_DATA}`);
        }
      } catch (res) {
        console.log(res);
      }
    },
    async fetchToWallet() {
      const data = {
        approveToken: this.data.meta.approveToken,
        nId: this.data.id,
      };
      try {
        const res = await this.$store.dispatch(`user/${STACKING_TO_WALLET}`, data);
        if (res.ok) {
          this.$notify({
            type: 'success',
            text: this.$t('wallets.notification.successWallet'),
            closeOnClick: true,
          });
          this.$store.commit('user/delNotification', this.data.id);
          this.$store.dispatch(`user/${GET_USER}`);
        }
      } catch (res) {
        console.log(res);
      }
    },
    getFormatDate(value) {
      if (value > 0) {
        const milisec = new Date(value);
        const d = Math.floor(milisec / 1000 / 60 / 60 / 24);
        const h = milisec.getUTCHours();
        const m = milisec.getUTCMinutes();
        const s = milisec.getUTCSeconds();

        let res = '';
        if (d !== 0) {
          res = `${d} days`;
        } else if (h !== 0) {
          res = `${h} hours`;
        } else if (m !== 0) {
          res = `${m} minutes`;
        } else if (s !== 0) {
          res = `${s} seconds`;
        }
        return `${res} ago`;
      }
      return ' ';
    },
  },
};
</script>

<style lang="scss" scoped>
 .simple-notification {
   display: flex;
   padding: 25px;
   letter-spacing: 0.06em;
   border-bottom: 1px solid #e5e5e5;
   .notification-icon {
     width: 33px;
     height: 33px;
     margin-right: 15px;
     flex-shrink: 0;
   }
   .notification-body {
     width: 320px;
     .top {
       width: 100%;
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-bottom: 10px;
       @media (max-width: 768px) {
         flex-direction: column;
         align-items: flex-start;
       }
       .title {
         font-size: 18px;
         @media (max-width: 768px) {
           margin-bottom: 10px;
        }
       }
       .time-date {
         font-size: 14px;
         color: #052B43;
         opacity: 0.3;
         text-align: right;
       }
     }
   }
   .notifications-buttons {
     margin-top: 10px;
     display: flex;
     justify-content: space-between;
     @media (max-width: 768px) {
       flex-direction: column;
     }
     button {
       padding: 7px 10px;
       @media (max-width: 768px) {
         margin-bottom: 12px;
       }
     }
     .transparent-button {
       @include btn-transparent;
       width: 112px;
         @media (max-width: 768px) {
          width: 100%;
       }
     }
     .green-button {
       @include btn-teal;
         @media (max-width: 768px) {
          width: 100%;
       }
     }
   }
 }
</style>
