<template>
  <section class="row">
    <div class="features-block">
      <h3 class="features-block__title">{{ $t('landing.features.heading') }}</h3>
      <p class="features-block__description">{{ $t('landing.features.text') }}</p>
      <ul class="features-list">
        <li class="features-list__item" v-for="(feature, index) in features" :key="index">
          <FeatureCard
            :icon="feature.icon"
            :name="feature.name"
            :description="feature.description"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .features-block {
    padding: 100px 0 162px;
    &__title {
      @include landing-title;
      margin: 0 auto 40px;
      color: $main-light;
      text-align: center;
    }
    &__description {
      @include landing-subtitle;
      color: $main-dark;
      text-align: center;
      margin: 0 auto 87px;
    }
  }

  .features-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-width: 1440px;
    margin: 0 -15px;
    &__item {
      flex: 0 0 25%;
      max-width: 25%;
      padding: 0 15px;
    }

    @media screen and (max-width: 1366px) {
      max-width: 600px;
      margin: 0 auto;
      &__item {
        flex: 0 0 50%;
        max-width: 50%;
        padding: 15px;
      }
    }

    @media screen and (max-width: 640px) {
      display: block;
      &__item {
        flex: 0 1 100%;
        max-width: 330px;
        height: 190px;
        margin: 0 auto;
      }
    }
  }
</style>
<script>
import FeatureCard from '~/components/landing/feature-card';

export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          name: this.$t('landing.features.card_1.heading'),
          icon: require('@/assets/img/icons/e-bank.svg'),
          description: this.$t('landing.features.card_1.text'),
        },
        {
          name: this.$t('landing.features.card_2.heading'),
          icon: require('@/assets/img/icons/card.svg'),
          description: this.$t('landing.features.card_2.text'),
        },
        {
          name: this.$t('landing.features.card_3.heading'),
          icon: require('@/assets/img/icons/mobile.svg'),
          description: this.$t('landing.features.card_3.text'),
        },
        {
          name: this.$t('landing.features.card_4.heading'),
          icon: require('@/assets/img/icons/exchange.svg'),
          description: this.$t('landing.features.card_4.text'),
        },
      ],
    };
  },
};
</script>
