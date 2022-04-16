<template>
  <section class="banned">
    <div class="banned__content">
      <h2 class="banned__title banned__title_mb">
        {{ $t('banned.title') }}
      </h2>

      <p class="banned__subtitle banned__subtitle_mb" v-if="unbanTimestamp">
        {{ $t('banned.unbanDate') }}: {{ $d(new Date(unbanTimestamp)) }}
      </p>

      <p class="banned__subtitle banned__subtitle_mb">
        {{ $t('banned.reason') }}:
      </p>

      <p class="banned__text">
        {{ banMessage }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banned',
  middleware: 'guest',
  data() {
    return {
      banMessage: '',
      unbanTimestamp: '',
    };
  },
  validate({ query, redirect }) {
    if (!query.reason) {
      redirect('/');
      return false;
    }
    return true;
  },
  created() {
    const { reason, unbanTimestamp } = this.$route.query;
    this.banMessage = reason;

    if (unbanTimestamp) {
      this.unbanTimestamp = +unbanTimestamp;
    }
  },
};
</script>

<style lang="scss" scoped>
  .banned {
    min-height: 490px;
    min-width: 904px;
    display: flex;
    justify-content: center;
    // align-items: center;
    margin: 50px auto;
    padding-top: 65px;
    background: $white;
    box-shadow: -15px 40px 90px rgba(8, 34, 35, 0.18);
    border-radius: 20px;
    &__content {
      width: 60%;
    }
    &__title {
      @include landing-title;
      color: $main-dark;
      &_mb {
        margin-bottom: 22px;
      }
    }
    &__subtitle {
      font-size: 18px;
      line-height: 32px;
      color: $main-dark;
      &_mb {
        margin-bottom: 10px;
      }
    }
    &__text {
       font-size: 18px;
      line-height: 32px;
      color: $black;
      font-weight: 400;
      &_mb {
        margin-bottom: 10px;
      }
    }
  }
</style>
