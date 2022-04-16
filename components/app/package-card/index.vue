<template>
  <div class="package-card"
  :class="{disabled: data.disabled}">
    <div class="package-info">
      <div class="package-table">
        <div v-if="data.amount" class="package-table__row centered package-table__amount">{{ $n(reformatNumber(data.amount)) }} {{ data.currency }}</div>
        <div v-if="data.price" class="package-table__row package-table__row_price">
          <span class="package-table__label">price:</span>
          <span class="package-table__value">{{ $cpn(reformatNumber(data.price), 18) }}  {{ data.price_currency }}</span>
        </div>
        <div v-if="data.min" class="package-table__row">
          <span class="package-table__label">min:</span>
          <span class="package-table__value">{{ $n(reformatNumber(data.min)) }} {{ data.currency }}</span>
        </div>
        <div v-if="data.max" class="package-table__row">
          <span class="package-table__label">max*:</span>
          <span class="package-table__value">{{ $n(reformatNumber(data.max)) }}  {{ data.currency }}</span>
        </div>
        <div class="limit-notification">* {{ limitNotification(data.counterDropTime) }}</div>
      </div>
    </div>
    <div class="packages-left">
      <div v-if="data.packagesQuantity" class="packages-left__amount">{{ $n(reformatNumber(data.packagesQuantity)) }} hdp left </div>
      <div class="packages-left__progress">
        <span class="progressbar" :class="{ red: !data.isObtained}" :style="`width: ${data.progressBar}%;`"></span>
      </div>
    </div>
    <div class="package-buttons">
      <button :disabled="data.disabled" class="package-button" @click="buy">Buy</button>
    </div>

  </div>
</template>
<style src="./style.scss" lang="scss" scoped>
</style>
<script src="./script.js"></script>
