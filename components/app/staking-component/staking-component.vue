<template>
  <div class="staking" v-if="items">
    <page-component :no-pad="true">
      <template v-slot:head-left>{{ $t('wallets.headings.investment') }}</template>
      <template v-slot:head-right>
        <button class="open-button" @click="openPackagesModal">Open</button>
        <pagination :total="items.count" @paginator-updated="apiGetStakingData"></pagination>
      </template>
      <template v-slot:default>
        <vuescroll :ops="scrollOptions">
          <b-table
            class="default-table"
            id="table-staking"
            :items="stakingItems"
            :fields="stakingFields"
          >
            <template v-slot:cell(name)>
              Hdp
            </template>
            <template v-slot:cell(deadline)="data">
              {{ $d(new Date(data.item.createdAt).getTime()) }}
            </template>
            <template v-slot:cell(lockdate)="data">
              {{ unlockDateConverter(data.item.createdAt) }}
            </template>
            <template v-slot:cell(enddate)="data">
              {{ $d(new Date(data.item.endingDate).getTime()) }}
            </template>
            <template v-slot:cell(balanceCrypto)="data">
              <span>{{ data.item.balanceCrypto | cryptoDigits }} {{ data.item.ticker }}</span>
            </template>
            <template v-slot:cell(amount)="data">
              {{ $n(calcAmount(data.item)) }} Hdp
            </template>
            <template v-slot:cell(balanceToUsd)="data">
              <span class="usd-value">{{ parseFloat(data.item.inUSDAmount, 2) }} $</span>
            </template>
            <template v-slot:cell(buttons)="data">
              <button v-if="data.item.status === 'active'" class="table-button" @click="startWithdrawalProcess(data.item)">Withdraw</button>
            </template>
          </b-table>
        </vuescroll>
      </template>
    </page-component>
    <Modal :auto-width="true" v-if="staking.status" @close="setStakingStatus('')">
      <div class="staking-modal">
        <div v-if="staking.status === 'package'" class="choose-package">
          <h4>Choose a package</h4>
          <div class="cards-wrap">
            <div v-for="(card, index) in packages" :key="index" class="card"
                 :class="{selected: staking.selectedPackage.id === card.id}" @click="selectPackage(card)">
              <div class="marker">
                <img src="~assets/img/checked.svg" alt="active">
              </div>
              <div class="amount-text">{{ card.minValue }} {{ card.max ? '' : '+' }}</div>
              <div v-if="card.max" class="text">to</div>
              <div class="amount-text">{{ card.max ? card.max : '' }} HDP</div>
              <div class="information-block first">
                <h5 class="text">Package price: </h5>
                <div class="value">{{ card.fee * 100 }} %</div>
              </div>
              <div class="information-block">
                <h5 class="text">Annual revenue: </h5>
                <div class="value">{{ card.interest * 100 }} %</div>
              </div>
            </div>
          </div>
          <div class="buttons-row">
            <button class="positive-button" @click="setStakingStatus('amount')">Proceed</button>
          </div>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <div v-if="staking.status === 'amount'" class="specify-amount">
            <h4>Enter the number of tokens</h4>
            <div class="text">selected package: {{ staking.selectedPackage.minValue }}
              {{ staking.selectedPackage.max ? `to ${staking.selectedPackage.max}` : '+' }} HDP
            </div>
            <div class="text">price: {{ staking.amount * staking.selectedPackage.fee }} Hdp</div>
            <div class="text">annual rate: {{ staking.selectedPackage.interest * 100 }} %</div>
            <ValidationProvider name="value" slim v-slot="{ errors }"
                                :rules="getValidatorRules(staking.selectedPackage.min, staking.selectedPackage.max)">
              <numeric-input name="value" :min="staking.selectedPackage.minValue"
                             :max="staking.selectedPackage.amountLeft" :step="10"
                             v-model="staking.amount"></numeric-input>
              <span class="validation-message">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="buttons-row">
              <button class="retoir-button" @click="setStakingStatus('package')">Back</button>
              <button class="positive-button" @click="handleSubmit(buy)">Proceed</button>
            </div>
          </div>
        </ValidationObserver>
<!--   first notify     -->
        <div v-if="staking.status === 'success' || staking.status === 'error'" class="result-notification">
          <template v-if="staking.status === 'success'">
            <h4>Success</h4>
            <div class="notification-text">
              {{ staking.amount }} Hdp successfully delegated. They are blocked for 1 year. On first day of each month
              you will be rewarded according to {{ staking.selectedPackage.percentage }} % (annual rate). Thank you
            </div>
            <img src="~assets/img/notifications/success.svg" alt="Success" class="notification-icon">
          </template>
          <template v-if="staking.status === 'error'">
            <h4>Failure</h4>
            <div class="notification-text">
              You do not have enough funds in Hdp. Fill up the balance in the Buy Hdp section and repeat the procedure
            </div>
            <img src="~assets/img/notifications/error.svg" alt="Error" class="notification-icon">
          </template>
        </div>
<!-- second notify -->
        <div v-if="staking.status === 'successWithdraw' || staking.status === 'errorWithdraw'" class="result-notification">
          <template v-if="staking.status === 'successWithdraw'">
            <h4>Success</h4>
            <div class="notification-text">
              You will receive your funds when the next distribution period starts.
            </div>
            <img src="~assets/img/notifications/success.svg" alt="Success" class="notification-icon">
          </template>
          <template v-if="staking.status === 'errorWithdraw'">
            <h4>Failure</h4>
            <div class="notification-text">
              Error
            </div>
            <img src="~assets/img/notifications/error.svg" alt="Error" class="notification-icon">
          </template>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js';
import { BTable } from 'bootstrap-vue';
import vuescroll from 'vuescroll';
import { mapGetters } from 'vuex';
import NumericInput from '../numeric-input/NumericInput.vue';
import Modal from '~/components/app/modal';
import {
  BUY_PACKAGE, GET_AVAILABLE_PACKAGES, GET_STAKING_DATA, CLAIM_STAKE, WITHDRAW,
} from '~/store/staking/consts';
import Pagination from '../pagination/pagination';

export default {
  name: 'staking-component',
  components: {
    Pagination,
    Modal,
    NumericInput,
    BTable,
    vuescroll,
  },
  data() {
    return {
      currentPage: '1',
      scrollOptions: {
        vuescroll: {
          mode: 'slide',
          zooming: false,
          scroller: {
            bouncing: false,
          },
        },
        scrollPanel: {
          scrollingY: false,
        },
        rail: {},
        bar: {
          background: '#2dccd3',
        },
      },
      staking: {
        status: '',
        amount: 0,
        selectedPackage: {
          id: '',
        },
      },
      withdraw: {
        item: {},
        status: '',
      },
      stakingFields: [
        {
          key: 'name',
          label: this.$t('wallets.exchange.name'),
          sortable: false,
        },
        {
          key: 'deadline',
          label: this.$t('dashboard.packages.lockdate'),
          sortable: false,
        },
        {
          key: 'deadline',
          label: this.$t('dashboard.packages.lockdate'),
          sortable: false,
        },
        {
          key: 'lockdate',
          label: this.$t('dashboard.packages.deadline'),
          sortable: false,
        },
        {
          key: 'enddate',
          label: 'End date',
          sortable: false,
        },
        {
          key: 'status',
          label: this.$t('wallets.exchange.status'),
        },
        {
          key: 'amount',
          label: this.$t('wallets.exchange.total'),
          sortable: false,
        },
        {
          key: 'buttons',
          label: '',
          sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      packages: 'staking/getPackages',
      items: 'staking/getData',

    }),
    stakingItems() {
      return this.items.rows;
    },
  },
  async created() {
    await this.apiGetStakingData();
    await this.$store.dispatch(`staking/${GET_AVAILABLE_PACKAGES}`);
  },
  methods: {
    unlockDateConverter(item) {
      const date = new Date(item);
      date.setMonth(date.getMonth() + 3);
      return this.$d(new Date(date));
    },
    convertDate(date) {
      return new Date(date).toDateString();
    },
    selectPackage(card) {
      this.staking.selectedPackage = card;
    },
    calcAmount(item) {
      return new BigNumber(item.deposit).plus(item.receivable).plus(item.revenue).toNumber();
    },
    selectWithdrawPackage(pkg) {
      this.withdraw.item = pkg;
    },
    setStakingStatus(status) {
      this.staking.status = status;
    },
    setWithdrawalStatus(status) {
      this.withdraw.status = status;
    },
    openPackagesModal() {
      this.selectPackage(this.packages[0]);
      this.setStakingStatus('package');
    },
    async startWithdrawalProcess(stake) {
      try {
        await this.$store.dispatch(`staking/${CLAIM_STAKE}`, stake.id);
        this.setStakingStatus('successWithdraw');
      } catch {
        this.setStakingStatus('errorsWithdraw');
      }
    },
    getValidatorRules(min, max) {
      let string = '';
      if (min > -1) string += `min_value: ${min}`;
      if (min > -1 && max) string += '|';
      if (max) string += `max_value: ${max}`;
      return string;
    },
    async buy() {
      try {
        await this.$store.dispatch(`staking/${BUY_PACKAGE}`, {
          amount: this.staking.amount,
        });
        await this.apiGetStakingData();
        this.setStakingStatus('success');
      } catch {
        this.setStakingStatus('error');
      }
    },
    async withdrawCard() {
      try {
        await this.$store.dispatch(`staking/${WITHDRAW}`, {
          id: this.withdraw.item.id,
          amount: Math.floor(this.withdraw.item.amount).toString(),
        });
        this.withdraw.status = 'success';
      } catch {
        this.withdraw.status = 'error';
      }
    },
    async apiGetStakingData(payload = null) {
      try {
        await this.$store.dispatch(`staking/${GET_STAKING_DATA}`, payload);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
.staking {
  .table-button, .open-button {
    @include btn-teal;
    padding: 8px;
  }
}

.text {
  font-weight: normal;
  font-size: 16px;
  opacity: 0.5;
}

#table-staking {
  user-select: text;
  grid-template-columns:
        minmax(90px, 1fr) minmax(120px, 2fr)
        minmax(120px, 2fr) minmax(120px, 2fr)
        minmax(120px, 2fr) minmax(140px, 1fr)
        minmax(160px, 1fr);

  tbody tr:first-of-type td {
    background: #FFFFFF !important;
  }

  tbody tr:not(:first-of-type) td {
    background: #FBFBFC !important;
  }

  .icon {
    flex-shrink: 0;
  }
}

.input-row {
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 20px;
  }

  label {
    @include profile-label;
  }

  input {
    @include profile-input;
  }
}

h4 {
  text-align: center;
  font-weight: normal;
  opacity: 0.5;
}

.cards-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.card {
  position: relative;
  width: 267px;
  height: 360px;
  margin: 15px;
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.06em;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    font-size: 20px;
    margin: 5px;
    .text {
      font-size: 20px;
    }
  }

  &.selected {
    border: 2px solid $main-light;

    .marker {
      background: $main-light;
      border-color: $main-light;
    }
  }

  .information-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18px;
    @media (max-width: 900px) {
      flex-direction: row;
      margin-bottom: 1vw;
    }

    &.first {
      margin-top: 30px;
      @media (max-width: 900px) {
        margin-top: 1.1vw;
      }
    }
  }

  .amount-text {
    font-weight: bold;
    font-size: 30px;
    @media (max-width: 900px) {
      font-size: 20px;
      padding-top: 10px;
    }
  }

  .value {
    font-weight: 500;
  }

  .marker {
    $size: 18px;
    width: $size;
    height: $size;
    border-radius: 50%;
    border: 1px solid #EAEAEA;
    background: white;
    position: absolute;
    left: 22px;
    top: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.choose-package {
  .buttons-row {
    flex-direction: row-reverse;
  }
  .cards-wrap {
    @media (max-width: 900px) {
      display: grid !important;
      grid-template-columns: minmax(135px,2fr);
      margin-left: -10px;
    }
    .card {
      width: 200px;
    }
  }
  @media (max-width: 900px) {
    .cards-wrap {
      display: flex;
      align-items: center;
      .card {
        width: 100%;
      }
    }
  }
}

.specify-amount, .result-notification {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.specify-amount {
  height: 386px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .validation-message {
    min-height: 20px;
    display: flex;
  }

  h4 {
    opacity: 0.5;
  }

  .text {
    margin-top: 10px;
    opacity: 0.3;
    text-align: center;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
}

.result-notification {
  width: 300px;
  text-align: center;

  & > * {
    margin-bottom: 10px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
}

.withdraw-option {
  display: grid;
  grid-template-columns: 300px 1fr 1fr 30px;
  padding: 15px;
  width: 100%;
  height: 60px;
  @media (max-width: 900px) {
    grid-template-columns: 90px 1fr 1fr 30px;
  }

  .text {
    margin-right: 24px;
  }

  .ticker {
    opacity: 1;
  }

  .marker {
    position: static;
  }
}

.buttons-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }

}

.retoir-button {
  @include btn-transparent;
  padding: 17px;
  width: 240px;
  margin: 7px;
}

.positive-button {
  @include btn-teal;
  margin: 7px;
  padding: 17px;
  width: 240px;
}

.validation-message {
  color: $red;
}

.table-button {
  padding: 7px 10px;
  flex: 1;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }

  // width: 50%;
  &:not(:first-child) {
    margin-left: 20px;
  }
}
</style>
