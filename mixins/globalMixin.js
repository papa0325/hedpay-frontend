import Vue from 'vue';
import { STACKING_TO_STAKE } from '../store/user/consts';
import { GET_STAKING_DATA } from '../store/staking/consts';
import {
  GET_FAVORITES,
  POST_FAVORITE,
  DEL_FAVORITE,
} from '../store/favorites/consts';

Vue.mixin({
  computed: {
    BaseUrl() {
      return process.env.BASE_URL;
    },
    NotificationSocketUrl() {
      return process.env.BASE_WSS_URL;
    },
  },
  methods: {
    NumberWithCommas(value) {
      return this.$n(value);
      // return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    async ToFavorite(item) {
      console.log(item);
      try {
        await this.$store.dispatch(`favorites/${POST_FAVORITE}`, item);
      } catch (error) {
        console.log(error);
      }
    },
    async GetFavorites() {
      try {
        await this.$store.dispatch(`favorites/${GET_FAVORITES}`);
      } catch (error) {
        console.log(error);
      }
    },
    async DeleteFavorite(id) {
      try {
        await this.$store.dispatch(`favorites/${DEL_FAVORITE}`, id);
      } catch (error) {
        console.log(error);
      }
    },
    LocalHostUrl() {
      if (!process.server) {
        return `${window.location.host}`;
      }
      return '';
    },
  },
});
