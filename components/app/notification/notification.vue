<template>
  <notifications
    position="bottom"
    :width="'100%'"
    :animation="animation"
    :duration="4000"
  >
    <template slot="body" slot-scope="props">
      <div class="notification">
        <img src="~/assets/img/notifications/error.svg" class="notification__img" v-if="props.item.type === 'error'"/>
        <img src="~/assets/img/notifications/warm.svg" class="notification__img" v-if="props.item.type === 'warm'"/>
        <img src="~/assets/img/notifications/success.svg" class="notification__img" v-if="props.item.type === 'success'"/>
        <span class="notification__text">{{ props.item.text}}</span>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  data: () => ({
    animation: {
      enter: {
        transform: ['translateY(-100%)', 'translateY(0)'],
        opacity: [1, 0],
      },
      leave: {
        opacity: [0, 1],
      },
    },
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
  .vue-notification-wrapper {
    width: 100%;
  }
  .notification {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 25px;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(5, 27, 41, 0.15);
    border-radius: 10px;
    margin-bottom: 6px;

    &__text {
      font-size: 16px;
      line-height: 1.18;
      letter-spacing: 0.06em;
      color: $main-dark;
    }
    &__img {
      width: 24px;
      height: 24px;
      margin-right: 20px;
    }
  }
</style>
