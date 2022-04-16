<template>
  <ul class="tab-list">
    <li v-for="(tab, i) in tabs" :key="i" :class="{'active': value === tab}">
      <span @click="setTab(tab)">{{ tab }}</span>
    </li>
  </ul>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
