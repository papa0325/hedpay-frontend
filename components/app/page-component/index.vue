<template>
  <div class="component">
    <div class="head">
      <div class="head__left">
        <slot name="head-left" />
      </div>
      <div class="head__right">
        <slot name="head-right" />
      </div>
    </div>
    <div class="body" :class="{'no-pad': noPad}">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
