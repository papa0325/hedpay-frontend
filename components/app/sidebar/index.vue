<template>
  <div class="sidebar" id="sidebar" :class="{'slim': isSlim, 'mobile-open': isMobileOpen}">
    <div class="sidebar__top">
      <a class="logo" href="https://www.hedpay.com/">
        <img src="~assets/img/logo.png" />
      </a>
      <div class="burger" @click="sidebarToggle">
        <img src="~assets/img/burger.svg" />
      </div>
    </div>
    <nuxt-link to="/app/profile" class="sidebar__user">
      <div class="sidebar__user__photo">
        <img v-if="!profile.avatar" src="~assets/img/default-avatar.png" alt="ava" />
        <img v-else :src="profile.avatar" />
      </div>
      <div class="sidebar__user__name">
        <span>
          {{profile.firstName}}
          <br />
          {{profile.lastName}}
        </span>
        <span></span>
        <div class="is-online">
          <div class="is-online__text">online</div>
          <div class="is-online__status online" />
        </div>
      </div>
    </nuxt-link>
    <nav class="nav">
      <ul>
        <li class="nav__item" :class="{'active': active === 'dashboard'}">
          <nuxt-link to="/app/dashboard">
            <div class="nav__item__icon">
              <Icon type="dashboard" :color="active === 'dashboard' ? '#FFFFFF' : '#C0C7D2'" />
            </div>
            <div class="nav__item__text">Dashboard</div>
          </nuxt-link>
        </li>
        <li class="nav__item" :class="{'active': active === 'packages'}">
          <nuxt-link to="/app/packages">
            <div class="nav__item__icon">
              <Icon type="packages" :color="active === 'packages' ? '#FFFFFF' : '#C0C7D2'" />
            </div>
            <div class="nav__item__text">Buy HDP2</div>
          </nuxt-link>
        </li>
        <li class="nav__item" :class="{'active': active === 'wallets'}">
          <nuxt-link to="/app/wallets">
            <div class="nav__item__icon">
              <Icon type="wallets" :color="active === 'wallets' ? '#FFFFFF' : '#C0C7D2'" />
            </div>
            <div class="nav__item__text">Wallets</div>
          </nuxt-link>
        </li>
        <li class="nav__item" :class="{'active': active === 'profile'}">
          <nuxt-link to="/app/profile">
            <div class="nav__item__icon">
              <Icon type="profile" :color="active === 'profile' ? '#FFFFFF' : '#C0C7D2'" />
            </div>
            <div class="nav__item__text">Profile</div>
          </nuxt-link>
        </li>
        <li class="nav__item" :class="{'active': active === 'faq'}">
          <nuxt-link to="/app/faq">
            <div class="nav__item__icon">
              <Icon type="faq" :color="active === 'faq' ? '#FFFFFF' : '#C0C7D2'" />
            </div>
            <div class="nav__item__text">FAQ</div>
          </nuxt-link>
        </li>
        <li class="nav__item" :class="{'active': active === 'chat'}">
          <nuxt-link to="/app/chat">
            <div class="nav__item__icon">
              <Icon type="chat" :color="active === 'chat' ? '#FFFFFF' : '#C0C7D2'" />
            </div>
            <div class="nav__item__text">Chat</div>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
<script src="./script.js"></script>
