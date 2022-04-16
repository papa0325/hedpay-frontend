<template>
  <div class="vdd">
    <button
      v-click-outside="() => hideDD()"
      @click="toggleDD"
      class="vdd__btn"
    >
      <div class="vdd__value">
        <slot name="label" :label="value">
          {{ value }}
        </slot>
      </div>
      <div class="vdd__icon">
        <img src="~assets/img/arrow_dd.svg" />
      </div>
    </button>
    <div class="vdd__items" v-if="isShown">
      <div
        v-for="(valueItem, i) in options"
        :key="`vdd__item_${id}-${i}`"
        @click="selectDD(valueItem)"
        class="vdd__item"
      >
        <slot name="option" :option="valueItem">
          {{ valueItem }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'CustomSelect',
  directives: {
    ClickOutside,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    id: {
      // a unique key to identify the dropdown. Used as a key when iterating through dropdown options
      type: String,
      reauired: true,
    },
  },
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    selectDD(item) {
      this.$emit('input', item);
    },
    toggleDD() {
      this.isShown = !this.isShown;
    },
    hideDD() {
      this.isShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .vdd {
  position: relative;
  width: 100%;
  &__icon {
    margin: 0 0 0 8px;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    height: 40px;
    background: #F4F4F4;
    border-radius: 5px;
    border: none;
    padding: 0 16px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.06em;
    color: rgba(#052B43, 0.4);
  }
  &__items {
    z-index: 50;
    border-radius: 5px;
    position: absolute;
    top: calc(100% + 4px);
    background: #FFF;
    width: 100%;
    max-width: 100%;
    box-shadow: 0 2px 15px -5px rgba(#000, .15);
    padding: 7px 0;
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow: auto;
  }
  &__item {
    cursor: pointer;
    color: rgba(5, 43, 67, 0.8);
    display: flex;
    align-content: flex-start;
    padding: 7px 20px;
  }
}
</style>
