<template>
  <portal to="modal">
    <div class="modal-wrap" @mousedown.self="close">
      <div class="modal" :style="{maxWidth: width ? width + 'px' : '1200px', width: autoWidth ? 'auto' : '100%'}">
        <div class="modal__close" @click="close">
          <img src="~assets/img/modal-cross.svg" />
        </div>
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </portal>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
