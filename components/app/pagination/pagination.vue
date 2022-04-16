<template>
    <div class="pagination">
       <button class="pagination__left" @click="prevPage" :disabled="currentPage === 1">
          <img src="~assets/img/icons/arrow-to-left.svg">
       </button>
       <input type="number" class="pagination__current-page" v-model="currentPage" @keyup="validateInput" @keypress="onlyNumber">
       <span class="pagination__all">of {{ pagesTotal }}</span>
       <button class="pagination__right" @click="nextPage" :disabled="currentPage >= pagesTotal">
          <img src="~assets/img/icons/arrow-to-left.svg">
       </button>
    </div>
</template>

<script>
import helperFunc from '~/mixins/helpers';

export default {
  name: 'pagination',
  mixins: [helperFunc],
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      onPage: 5,
    };
  },
  computed: {
    pagesTotal() {
      return Math.ceil(this.total / this.onPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.emitChanges();
      }
    },
    nextPage() {
      if (this.currentPage < this.pagesTotal) {
        this.currentPage++;
        this.emitChanges();
      }
    },
    validateInput($event) {
      if ($event.key === 'Delete' || $event.key === 'Backspace') return;
      if (this.currentPage > this.pagesTotal) this.currentPage = this.pagesTotal;
      else if (this.currentPage < 1) this.currentPage = 1;
      this.emitChanges();
    },
    emitChanges() {
      this.$emit('paginator-updated', {
        limit: this.onPage,
        offset: (this.currentPage - 1) * this.onPage,
      });
    },
  },

};
</script>

<style lang="scss" scoped>
  .pagination {
      display: flex;
      align-items: center;
      &__left, &__right {
        background:  $main-light;
        border-radius: 5px;
        width: 25px;
        height: 25px;
        margin: 0 20px;

        @media (max-width: 425px) {
          margin: 0 10px;
        }

        // &:hover {
        //   opacity: .8;
        // }

        &:disabled {
          opacity: .7;
          cursor: default;
          pointer-events: none;
        }
      }
      &__right {
        transform: rotate(180deg);
      }
      &__current-page {
        border: 1px solid $stroke;
        border-radius: 5px;
        width: 46px;
        height: 25px;
        text-align: center;
        font-size: 16px;
        color: $main-dark;

        @media (max-width: 425px) {
          font-size: 14px;
          width: 40px;
        }

      }
      &__all {
        color: rgba(black, .3);
        letter-spacing: 0.06em;
        line-height: 19px;
        margin-left: 10px;

        @media (max-width: 425px) {
          font-size: 14px;
        }
        @media (max-width: 375px) {
          display: none;
        }
      }
    }
</style>
