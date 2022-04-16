<template>
  <div class="dropdown">
    <div class="dropdown__label">{{label}}</div>
    <div class="dropdown__button" @click="toggleMenu">
      <span class="dropdown__button__value">
        {{ selectedValue[valueField] }}
      </span>
      <span class="dropdown__button__arrow">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20711 0.792893C8.59763 1.18342 8.59763 1.81658 8.20711 2.20711L4.5 5.91421L0.792893 2.20711C0.402368 1.81658 0.402369 1.18342 0.792893 0.792893C1.18342 0.402369 1.81658 0.402369 2.20711 0.792893L4.5 3.08579L6.79289 0.792893C7.18342 0.402369 7.81658 0.402369 8.20711 0.792893Z"
            fill="#2dccd3"
          />
        </svg>
      </span>
    </div>
    <ul
      v-show="isOpened"
      class="dropdown__menu"
      v-click-outside="hideMenu">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'dropdown__menu__item_active': item[keyField] === selectedValue[keyField] }"
        class="dropdown-menu__item"
        @click="selectOption(item)"
      >{{item[valueField]}}</li>
    </ul>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
// default output fields: key, value
export default {
  name: 'ultimate-dropdown',
  props: {
    items: {
      type: Array,
      required: true,
    },
    selectedValue: {
      required: true,
    },
    setValue: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
    },
    passedKeyField: {
      type: String,
    },
    passedValueField: {
      type: String,
    },
  },
  data() {
    return {
      isOpened: false,
      keyField: 'key',
      valueField: 'value',
    };
  },
  methods: {
    toggleMenu() {
      this.isOpened = !this.isOpened;
    },
    hideMenu() {
      this.isOpened = false;
    },
    selectOption(option) {
      // this.$emit('input', option);
      this.setValue(option);
      this.hideMenu();
    },
  },
  mounted() {
    this.popupItem = this.$el;
    this.keyField = this.passedKeyField || 'key';
    this.valueField = this.passedValueField || 'value';
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss">
  .dropdown {
    position: relative;
    &__label{
      @include profile-label;
    }
    &__button {
      padding: 20px;
      background: #F8F9FB;
      cursor: pointer;
      border: 1px solid #F8F9FB;
      display: flex;
      border-radius: 10px;
      &__value{
        flex: 4;
        text-align: left;
      }
      &__arrow{
        flex: 1;
        text-align: right;
        color: $main-light;
      }
    }
    &__menu {
      position: absolute;
      top: 32px;
      right: 0px;
      width: 100%;
      background-color: $white;
      opacity: 1;
      box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      overflow: hidden;
      &__item {
        padding: 12px 20px;
        cursor: pointer;
        &:hover {
          background-color: $stroke;
        }
        &_active {
          background-color: $stroke2;
        }
      }
    }
  }
</style>
