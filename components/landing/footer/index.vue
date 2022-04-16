<template>
  <footer class="footer">
    <div class="row">
      <div class="footer__top">
        <div class="footer__top__left">
          <div class="footer__logo" style="margin-left: 475px;">
            <img src="~assets/img/logo.png" />
          </div>
          <nav class="footer__nav">
            <ul class="footer__nav__col1">
              <!-- <li>Some page</li>
              <li>Some page</li>-->
            </ul>
          </nav>
        </div>
        <div class="links-wrap">
          <ul class="footer__socials">
          <li class="footer__socials__item">
            <a href="https://www.facebook.com/hedpayltd" target="_blank">
              <img src="~assets/img/socials/fb.png" />
            </a>
          </li>
          <li class="footer__socials__item">
            <a href="https://twitter.com/MyHEdpAY" target="_blank">
              <img src="~assets/img/socials/tw.png" />
            </a>
          </li>

          <li class="footer__socials__item">
            <a href="https://github.com/HEDPAY" target="_blank">
              <img src="~assets/img/socials/github.png" />
            </a>
          </li>

          <li class="footer__socials__item">
            <a href="https://www.instagram.com/myhedpay" target="_blank">
              <img src="~assets/img/socials/insta.png" />
            </a>
          </li>
          <li class="footer__socials__item">
            <a href="https://t.me/HEdpAY" target="_blank">
              <img src="~assets/img/socials/tg.png" />
            </a>
          </li>

          <li class="footer__socials__item">
            <a href="https://www.linkedin.com/company/hedpay-ltd" target="_blank">
              <img src="~assets/img/socials/linkedin.png" />
            </a>
          </li>

          <li class="footer__socials__item">
            <a href="https://www.youtube.com/channel/UCpTk0N-CL24IO2IAY7k1t9g" target="_blank">
              <img src="~assets/img/socials/youtube.png" />
            </a>
          </li>
        </ul>
          <div class="button-links">
            <button class="button-link">
              <img src="~assets/img/socials/playmarket.png" alt="Google Play">
              <div class="text-wrap">
                <span class="text-helper">Download on</span>
                <span class="title">Google Play</span>
              </div>
            </button>
            <button class="button-link">
              <img src="~assets/img/socials/appstore.png" alt="Apple Store">
              <div class="text-wrap">
                <span class="text-helper">Download on</span>
                <span class="title">Apple Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="footer__bottom" style="margin-left: 615px">
        <div
          class="footer__copyright"
        >{{ $t('landing.footer.copyright') }} {{ new Date().getFullYear() }} {{ $t('landing.footer.rights') }}</div>
      </div>
    </div>
  </footer>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
