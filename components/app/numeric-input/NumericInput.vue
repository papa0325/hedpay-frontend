<template>
  <div class="numeric-input">
    <button :disabled="!canBeDecreased" class="ni-button ni-prev" @click="changeValue(-step)">
      <img src="~assets/img/buttons/prev.svg" alt="prev">
    </button>
    <div class="ni-display">
      <input :name="name" :min="min" type="number"  :max="max"  class="ni-value" v-model="number">
    </div>
    <button :disabled="!canBeIncreased" class="ni-button ni-next" @click="changeValue(step)">
      <img src="~assets/img/buttons/next.svg" alt="next">
    </button>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js';
import { CurrencyDirective } from 'vue-currency-input';

export default {
  name: 'NumericInput',
  props: {
    name: String,
    value: {
      default: '0',
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },
  data() {
    return {
      number: this.value,
    };
  },
  computed: {
    canBeIncreased() {
      const intendedValue = new BigNumber(this.number).plus(this.step).toNumber();
      if (intendedValue > this.max) return false;
      return true;
    },
    canBeDecreased() {
      const intendedValue = new BigNumber(this.number).minus(this.step).toNumber();
      if (intendedValue < this.min) return false;
      return true;
    },
  },
  watch: {
    value() {
      const preparedValue = typeof (this.value) === 'string' ? this.value.replace(/,/g, '') : this.value;
      const parsedValue = isNaN(preparedValue) ? 0 : parseInt(preparedValue);
      this.number = parsedValue;
    },
    number() {
      this.$emit('input', this.number);
    },
  },
  methods: {
    changeValue(value) {
      const initialValue = new BigNumber(this.number);
      const result = initialValue.plus(value);
      this.number = result.toNumber();
    },
  },
  directives: {
    currency: CurrencyDirective,
  },

};
</script>

<style lang="scss" scoped>
  .numeric-input {
    display: flex;
    max-width: 342px;
    justify-content: center;
    @media (max-width: 768px) {
        /*width: 80%;*/
      }
    border: 1px solid #F8F9FB;
    border-radius: 8px;
    overflow: hidden;
    margin: 30px 0px;
    margin-bottom: 13px;
    .ni-button, .ni-display {
      width: 114px;
      height: 70px;
    }
    .ni-button {
      background: #F8F9FB;
      padding: 0;
      @media (max-width: 768px) {
        width: 40px;
      }
      &:hover {
        background: darken(#F8F9FB, 5);
      }
    }
    .ni-display {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      .ni-value {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        border: none;
        font-size: 30px;
      }
    }
  }
</style>
