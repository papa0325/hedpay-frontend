<template>
  <div class="toolbar">
    <div class="burger" @click="toggleSidebar">
      <img src="~assets/img/burger.svg" />
    </div>
    <div class="toolbar__right">
      <div class="toolbar__item toolbar__price">
        <span>{{`1 Hdp.ф = ${rate} USD`}}</span>
      </div>
      <nuxt-link to="/app/referal" class="toolbar__item toolbar__referral">
        <span>Referral</span>
        <Icon type="referral" color="#FFFFFF" />
      </nuxt-link>
      <div @click="toggleNotifications" class="toolbar__item toolbar__notification">
        <Icon type="bell" color="#FFFFFF" />
        <div v-if="notifications.length !== 0" class="has-notify" />
      </div>
      <hedpay-notifications v-model="isNtfShown"></hedpay-notifications>
      <div class="toolbar__item toolbar__logout" @click="logOut">
        <Icon type="logout" color="#FFFFFF" />
      </div>
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
