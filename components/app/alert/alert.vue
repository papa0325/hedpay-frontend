<template>
  <div class="alert-wrap" id="custom-alert" v-if="alert" @click.self="close">
    <div class="alert">
      <div class="close" @click="close">
        <img src="~assets/img/modal-cross.svg" />
      </div>

      <div class="title">{{ alert.title }}</div>
      <div class="subtitle">{{ alert.text }}</div>
      <div class="icon">
        <img v-if="alert.mode === 'success'" src="~assets/img/alert/success.png"/>
      </div>
    </div>
  </div>
</template>
<style src="./alert.scss" lang="scss" scoped></style>
<script src="./alert.js"></script>
