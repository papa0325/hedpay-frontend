<template>
  <section class="about-us-block">
    <div class="row">
      <div class="about-us-item about-us-item_reverse e-banking">
        <img src="~assets/img/about-us/e-banking.png" alt="E-Banking" class="about-us-item__img">
        <div class="about-us-item__content">
          <div class="about-us-item__title">{{ $t('landing.banking.heading') }}</div>
          <div class="text-block">
            <div class="about-us-item__highlight">{{ $t('landing.banking.subsection_1.heading') }}</div>
            <div class="about-us-item__text">{{ $t('landing.banking.subsection_1.text') }}</div>
            <div class="about-us-item__note">{{ $t('landing.banking.annotation') }}</div>
            <div class="integrated-currencies">
              <div class="about-us-item__highlight">{{ $t('landing.banking.subsection_2.heading') }}</div>
              <div class="about-us-item__note">{{ $t('landing.banking.annotation') }}</div>
              <ul class="currencies-list">
                <li class="currencies-list__item">
                  <div class="currency">HDP</div>
                </li>
                <li class="currencies-list__item">
                  <div class="currency">EUR</div>
                </li>
                <li class="currencies-list__item">
                  <div class="currency">GBR</div>
                </li>
                <li class="currencies-list__item">
                  <div class="currency">USD</div>
                </li>
              </ul>
            </div>
          </div>
          <nuxt-link
            tag="button"
            to="/sign-up"
            class="about-us-item__button">{{ $t('landing.banking.button') }}
          </nuxt-link>
        </div>
      </div>

      <div class="about-us-item socials">
        <div class="about-us-item-img-wrapper">
          <img src="~assets/img/about-us/follow-us.png" alt="Follow Us on Social medias" class="about-us-item__img">
          <ul class="socials-list">
            <li class="socials-list__item">
              <a href="https://www.facebook.com/hedpayltd" target="_blank">
                <img src="~assets/img/about-us/fb.svg" />
              </a>
            </li>
            <li class="socials-list__item">
              <a href="https://twitter.com/MyHEdpAY" target="_blank">
                <img src="~assets/img/about-us/twitter.svg" />
              </a>
            </li>
            <li class="socials-list__item">
              <a href="https://github.com/HEDPAY" target="_blank">
                <img src="~assets/img/about-us/github.svg" />
              </a>
            </li>
            <li class="socials-list__item">
              <a href="https://www.instagram.com/myhedpay" target="_blank">
                <img src="~assets/img/about-us/instagram.svg" />
              </a>
            </li>
            <li class="socials-list__item">
              <a href="https://t.me/HEdpAY" target="_blank">
                <img src="~assets/img/about-us/telegram.svg" />
              </a>
            </li>
            <li class="socials-list__item">
              <a href="https://www.linkedin.com/company/hedpay-ltd" target="_blank">
                <img src="~assets/img/about-us/linkedin.svg" />
              </a>
            </li>
            <li class="socials-list__item">
              <a href="https://www.youtube.com/channel/UCpTk0N-CL24IO2IAY7k1t9g" target="_blank">
                <img src="~assets/img/about-us/youtube.svg" />
              </a>
            </li>
            <li class="socials-list__item">
              <a href="https://www.skype.com" target="_blank">
                <img src="~assets/img/about-us/Skype.svg" />
              </a>
            </li>
          </ul>
        </div>
        <div class="about-us-item__content">
          <div class="text-block">
            <div class="about-us-item__title">{{ $t('landing.social_media.heading') }}</div>
            <div class="about-us-item__highlight">{{ $t('landing.social_media.subheading') }}</div>
            <div class="about-us-item__text">{{ $t('landing.social_media.text') }}</div>
          </div>
          <nuxt-link
            tag="button"
            to="/sign-up"
            class="about-us-item__button">{{ $t('landing.social_media.button') }}
          </nuxt-link>
        </div>
      </div>

      <div class="about-us-item about-us-item_reverse profit">
        <img src="~assets/img/about-us/hold-over.png" alt="Hold over 10,000 Earn Annual 7%" class="about-us-item__img">
        <div class="about-us-item__content">
          <div class="text-block">
            <div class="about-us-item__title">{{ $t('landing.holding.heading') }}</div>
            <div class="about-us-item__highlight">{{ $t('landing.holding.subheading') }}</div>
            <div class="about-us-item__text">{{ $t('landing.holding.text') }}</div>
          </div>
          <nuxt-link
            tag="button"
            to="/sign-up"
            class="about-us-item__button">{{ $t('landing.holding.button') }}
          </nuxt-link>
        </div>
      </div>

      <div class="about-us-item wallet">
        <img src="~assets/img/about-us/wallet.png" alt="Wallet" class="about-us-item__img">
        <div class="about-us-item__content">
          <div class="text-block">
            <div class="about-us-item__title">{{ $t('landing.wallet.heading') }}</div>
            <div class="about-us-item__text">{{ $t('landing.wallet.paragraph_1') }}</div>
            <div class="about-us-item__text">{{ $t('landing.wallet.paragraph_2') }}</div>
            <div class="about-us-item__highlight">{{ $t('landing.wallet.subheading') }}</div>
            <div class="about-us-item__note">{{ $t('landing.wallet.annotation') }}</div>
          </div>
          <nuxt-link
            tag="button"
            to="/sign-up"
            class="about-us-item__button">{{ $t('landing.wallet.button') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
