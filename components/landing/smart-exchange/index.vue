<template>
  <section class="smart-exchange">
    <div class="row smart-exchange-content">
      <div class="smart-exchange-information smart-exchange-content__item">
        <h3 class="smart-exchange__title">
          {{ $t('landing.exchange.heading') }}
        </h3>
        <p class="smart-exchange__text">
          {{ $t('landing.exchange.text') }}
        </p>
      </div>

      <div class="exchange-rates">
        <div class="exchange-rates__title">{{ $t('landing.exchange.table_heading') }}</div>
        <ul class="exchange-rates-card-list">
          <li class="exchange-rates-card-list__item" v-for="rate in rates" :key="rate.name">
            <div class="exchange-rates-card">
              <div class="exchange-rates-card__name">{{ rate.name }}</div>
              <div class="exchange-rates-card__course">
                <template v-for="(value, currency) in rate.rate">
                  <div
                    v-if="currency !== rate.name.toLowerCase()"
                    class="exchange-rates-card__course-value"
                    :key="currency"
                  >{{ value }}</div>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script src="./script.js"></script>

<style src="./style.scss" lang="scss" scoped></style>
