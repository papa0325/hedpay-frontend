<template>
  <div class="landing-top-block">
    <section class="row">
      <h2 class="landing-top-block__title">{{ $t('landing.heading') }}</h2>
      <p class="landing-top-block__description">{{ $t('landing.subheading') }}</p>

      <div class="packages">
        <div class="packages__title">{{ $t('landing.packages.heading') }}</div>
        <ul class="package-list">
          <li class="package-list__item" v-for="(pack, index) in packages" :key="index">
            <PackageCard
              :count="pack.count"
              :price="pack.price"
              :profit="pack.profit"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import PackageCard from '~/components/landing/fund-package-card';

export default {
  components: {
    PackageCard,
  },
  data() {
    return {
      packages: [
        {
          count: {
            value: '10,000 to 200,000 HDP',
          },
          price: {
            value: 0.5,
            currency: 'eth',
          },
          profit: 7,
        },
        {
          count: {
            value: '200,001 to 500,000 HDP',
            currency: 'hdp',
          },
          price: {
            value: 1,
            currency: 'eth',
          },
          profit: 12,
        },
        {
          count: {
            value: '500,001+ HDP',
            currency: 'hdp',
          },
          price: {
            value: 2,
            currency: 'eth',
          },
          profit: 18,
        },
      ],
    };
  },
};

</script>

<style lang="scss" scoped>
  .landing-top-block {
    padding: 179px 0 126px;
    margin-top: -80px;
    margin-bottom: 100px;
    background: url("~assets/img/top-block-bg.png") 50% 0 no-repeat;

    &__title {
      @include landing-title;
      font-weight: 900;
      margin-bottom: 18px;
      text-align: center;
      color: $main-dark;
    }

    &__description {
      margin-bottom: 100px;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.15;
      letter-spacing: 0.06em;
      text-align: center;
      color: rgba($main-dark, 0.5);
    }

    @media screen and (max-width: 960px) {
      padding-bottom: 30px;
    }
  }

  .packages {
    display: flex;
    flex-flow: column;
    align-items: center;
    &__title {
      @include landing-subtitle;
      margin-bottom: 40px;
      color: $main-dark;
    }
  }

  .package-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    max-width: 1320px;
    margin: 0 -44px;
    &__item {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      padding: 0 44px;
    }

    @media screen and (max-width: 1440px) {
      margin: 0 -34px;
      &__item {
        padding: 0 34px;
      }
    }

    @media screen and (max-width: 1330px) {
      max-width: 1200px;
      margin: 0 18px;
      &__item {
        padding: 0 18px;
      }
    }

    @media screen and (max-width: 1120px) {
      max-width: 960px;
      margin: 0 auto 18px;
      &__item {
        padding: 0 18px;
      }
    }

    @media screen and (max-width: 960px) {
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      &__item {
        width: 100%;
        max-width: 400px;
        &:not(:last-child) {
          margin-bottom: 56px;
        }
      }
    }
  }
</style>
