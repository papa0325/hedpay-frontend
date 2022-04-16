<template>
  <div class="landing-top-block">
    <section class="row">
      <h2 class="landing-top-block__title">The future banking solution</h2>
      <p class="landing-top-block__description">HEdpAY is one of the first projects connecting traditional bank and the crypto universe</p>

      <div class="packages">
        <div class="packages__title">Hedpay Fund Packages</div>
        <ul class="package-list">
          <li class="package-list__item" v-for="(pack, index) in packages" :key="index">
            <PackageCard/>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
