<template>
  <header class="header">
    <div class="row">
      <div class="top-wrap">
        <button v-show="!isMenuShown" class="burger" @click="showMenu">
          <img src="~assets/img/burger.svg" />
        </button>
        <button v-show="isMenuShown" class="burger" @click="hideMenu">
          <img src="~assets/img/burger-close.svg" />
        </button>
        <div class="logo">
          <a href="" class="logo__item">
            <img src="~assets/img/logo.png"/>
          </a>
        </div>
      </div>
      <nav class="nav" :class="{'is-shown': isMenuShown}" @click="hideMenu">
        <div class="auth" style="margin-right: -100px">
          <nuxt-link to="/sign-in" class="btn auth__sign-in auth__button">Sign In</nuxt-link>
          <nuxt-link to="/sign-up" class="btn auth__sign-up auth__button">Sign Up</nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
