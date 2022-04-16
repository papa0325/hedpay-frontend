<template>
  <page-component class="balance-widget">
    <template v-slot:head-left>Balance</template>
    <template v-slot:head-right>
      <Tabs v-model="balanceTab" :tabs="balanceTabs"/>
    </template>
    <template v-slot:default>
      <ul v-if="balanceTab === 'list'" class="wallets-list">
        <li class="wallet" v-for="wallet in wallets" :key="wallet.key">
          <div class="wallet__currency">
            <div class="wallet__currency__icon">
              <img :src="`/img/wallets/${wallet.icon}.svg`" />
            </div>
            <div class="wallet__currency__name">{{ wallet.coin }}</div>
          </div>
          <div class="wallet__ratio">
            <div class="wallet__ratio__bar">
              <div :style="{width: 70 + '%'}" class="wallet__ratio__bar--progress" />
            </div>
            <div class="wallet__ratio__value">{{ 70 }}%</div>
          </div>
          <div class="wallet__balance">{{`${wallet.balanceCrypto} ${wallet.ticker}`}}</div>
          <div class="wallet__balance-usd">{{ wallet.balanceToUsd }} USD</div>
        </li>
      </ul>
      <div v-else-if="false" class="wallets-chart">
        <!-- <client-only> -->
        <vc-donut
          :sections="walletsChart"
          :thickness="12"
          :size="241"
          unit="px"
          has-legend
          legend-placement="right"
        >
          <!-- <div class="chart__label">All</div> -->
          <div class="chart__val">5 5445 $</div>
        </vc-donut>
      </div>
    </template>
  </page-component>
</template>

<script>
import { mapGetters } from 'vuex';
import Tabs from '../../../components/app/tabs';
import PageComponent from '~/components/app/page-component';

export default {
  name: 'balance-widget',
  components: {
    Tabs,
    'page-component': PageComponent,
  },
  data: () => ({
    balanceTab: 'list', // list, chart
    balanceTabs: ['list', 'chart'],
  }),
  computed: {
    ...mapGetters({
      wallets: 'user/getWallets',
    }),
  },
};
</script>

<style  lang="scss" scoped>
  .wallet {
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: 40px;
    }
    &__currency {
      display: flex;
      align-items: center;
      width: 120px;

      &__icon {
        margin-right: 11px;
      }
      &__name {
        line-height: 19px;
        letter-spacing: 0.06em;
        color: $main-dark;
        white-space: nowrap;
      }
    }
    &__ratio {
      display: flex;
      align-items: center;
      &__bar {
        width: 73px;
        height: 5px;
        background: #F0F1F1;
        border-radius: 10px;
        &--progress {
          background: $red;
          height: 100%;
          border-radius: 10px;
        }
        @media (max-width: 425px) {
          display: none;
        }
      }
      &__value {
        margin-left: 14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.06em;
        color: $orange;
        white-space: nowrap;
      }
    }

    &__balance {
      width: 100%;
      max-width: 200px;
      line-height: 19px;
      letter-spacing: 0.06em;
      color: $main-dark;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
    &__balance-usd {
      line-height: 19px;
      letter-spacing: 0.06em;
      color: #596372;
      display: flex;
      align-items: center;
      white-space: nowrap;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .currency-symbol {
      text-transform: uppercase;
    }
  }

  .wallets-chart {
    min-height: 315px;
    padding: 32px 0;
    .chart{
      &__label {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.06em;
        color: #C0C7D2;
        margin-bottom: 8px;
      }
      &__val {
        font-weight: bold;
        font-size: 35px;
        line-height: 41px;
        text-align: center;
        letter-spacing: 0.06em;
        color: $black;
      }
    }
  }
</style>
