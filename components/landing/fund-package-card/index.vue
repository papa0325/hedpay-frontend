<template>
  <div class="found-package-card">
    <div class="found-package-card__info found-package-card__info-top">
      <div class="found-package-card__value">
        <template v-if="count.value">
          <span>{{ count.value | digits }}</span>
        </template>
        <template v-else>
          {{ count | digits }}
        </template>
      </div>
      <div class="found-package-card-price">
        <div class="found-package-card__price-title">{{ $t('landing.packages.cost') }}</div>
        <div class="found-package-card__price-value" v-if="price.value">
          {{ price.value | digits }} {{ price.currency }}
        </div>
      </div>
    </div>
    <hr class="found-package-card__line"/>
    <div class="found-package-card__info found-package-card__info-bottom">
      <div class="found-package-card__time">{{ $t('landing.packages.revenue') }}</div>
      <div class="found-package-card__profit">{{ profit }}%</div>
    </div>
    <nuxt-link
            tag="button"
            to="/sign-in"
            class="btn found-package-card__button">{{ $t('landing.packages.button') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'fundPackageCard',
  props: {
    count: {
      type: Number | Object,
      required: true,
    },
    price: {
      type: Number | Object,
      required: true,
    },
    duration: {
      type: String,
    },
    profit: {
      type: Number | String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .found-package-card {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 45px 0 69px;
    background: $white;
    box-shadow: -20px 40px 60px rgba(0, 0, 0, 0.12);
    border-radius: 15px;
    @media screen and (max-width: 1366px) {
      box-shadow: 25px 40px 60px rgba(0, 0, 0, 0.12);
    }
    &__info {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding: 0 32px;
    }
    &__info-top {
      margin-bottom: 30px;
      @media screen and (max-width: 1600px) {
        font-size: 70px;
      }
      @media screen and (max-width: 1440px) {
        font-size: 63px;
      }
    }
    &__info-bottom {
      margin-top: 36px;
      @media screen and (max-width: 1600px) {
        margin-top: 36px;
      }
      @media screen and (max-width: 1440px) {
        margin-top: 27px;
      }
    }
    &__name {
      margin-bottom: 10px;
      font-weight: 300;
      font-size: 30px;
      line-height: 1.16;
      text-align: center;
      letter-spacing: 0.06em;
      color: rgba($main-dark, .5);
      @media screen and (max-width: 1600px) {
        font-size: 25px;
      }
      @media screen and (max-width: 1440px) {
        font-size: 22px;
      }
    }
    &__value {
      display: flex;
      flex-flow: row nowrap;
      align-items: baseline;
      width: 186px;
      height: 62px;
      font-size: 26px;
      margin: 0 10px;
      text-align: center;
      margin-bottom: 40px;
      font-weight: 700;
      line-height: 1.18;
      letter-spacing: 0.06em;
      color: $main-dark;
      @media screen and (max-width: 1600px) {
        font-size: 25px;
      }
      @media screen and (max-width: 1440px) {
        font-size: 24px;
      }
    }
    &__value-currency {
      font-size: 50%;
    }
    &__price-title {
      margin-bottom: 15px;
      text-align: center;
      font-size: 18px;
      line-height: 1.16;
      letter-spacing: 0.06em;
      color: rgba($main-dark, 0.5);
    }
    &__price-value {
      text-align: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 139.69%;
      letter-spacing: 0.06em;
      color: $main-dark;
    }
    &__time {
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.16;
      color: rgba($main-dark, .5);
    }
    &__line {
      display: block;
      width: 100%;
      height: 15px;
      background: url("~assets/img/borders/hr-line.svg") center center no-repeat;
      border: none;
      background-size: 100%;
    }
    &__profit {
      font-weight: 500;
      font-size: 30px;
      line-height: 1.16;
      text-align: center;
      letter-spacing: 0.06em;
      color: rgba($main-dark, .6);
    }
    &__button {
      @include btn-teal;
      position: absolute;
      bottom: -26px;
      width: 224px;
      height: 53px;
      box-shadow: 0px 10px 30px rgba(27, 202, 212, 0.3);
    }
  }
</style>
