<template>
  <div class="feature-card">
    <img class="feature-card__icon" :src="icon">
    <div class="feature-card__content">
      <div class="feature-card__name">{{ name }}</div>
      <p class="feature-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
