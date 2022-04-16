<template>
  <section class="history-block">
    <div class="history-block__content">
      <img src="~/assets/img/circle-logo.png" class="history-logo" alt="logo">
      <div class="history-list">
        <div class="history-list__left">
          <div class="history-list__item history-list-element history-list__item-6">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
            <div class="history-list-element__content">
              <div class="history-list__date">Q1/2021</div>
            </div>
          </div>
          <div class="history-list__item history-list-element history-list__item-4">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
            <div class="history-list-element__content">
              <div class="history-list__date">Q3/2020</div>
              <div class="history-list__description">{{ $t('landing.storyline.stage_2') }}</div>
            </div>
          </div>
          <div class="history-list__item history-list-element history-list__item-2">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
            <div class="history-list-element__content">
              <div class="history-list__date">2018</div>
              <div class="history-list__description">{{ $t('landing.storyline.stage_4') }}</div>
            </div>
          </div>
        </div>

        <div class="history-list__right">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
          <div class="history-list__item history-list-element history-list__item-7">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
            <div class="history-list-element__content">
              <div class="history-list__date">Q2/2021</div>
            </div>
          </div>
          <div class="history-list__item history-list-element history-list__item-5">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
            <div class="history-list-element__content">
              <div class="history-list__date">Q4/2020</div>
              <div class="history-list__description">{{ $t('landing.storyline.stage_1') }}</div>
            </div>
          </div>
          <div class="history-list__item history-list-element history-list__item-3">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
            <div class="history-list-element__content">
              <div class="history-list__date">2019</div>
              <div class="history-list__description">{{ $t('landing.storyline.stage_3') }}</div>
            </div>
          </div>
          <div class="history-list__item history-list-element history-list__item-1">
            <div class="item-animated-border__1" />
            <div class="item-animated-border__2" />
            <div class="item-animated-border__3" />
            <div class="history-list-element__content">
              <div class="history-list__date">2017</div>
              <div class="history-list__description">{{ $t('landing.storyline.stage_5') }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="get-more">
        <div class="get-more__title">{{ $t('landing.storyline.heading') }}</div>
        <a
            href="mailto:info@hedpay.com"
            class="get-more__button">
          <span>{{ $t('landing.storyline.button') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $history-1-w: 41.6%;
  $history-2-w: 40.5%;
  $history-3-w: 29.3%;
  $history-4-w: 29%;
  $history-5-w: 16.3%;
  $history-6-w: 10.35%;
  $history-7-w: 9.35%;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .history-block {
    position: relative;
    height: 0;
    padding-top: 1920px / 2078px * 100%;
    margin-bottom: -424px;
    background: url('~assets/img/history-bg.png') center bottom no-repeat;
    background-size: 100%;
    &__content {
      position: absolute;
      width: 100%;
      top: 29%;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .history-logo {
    display: block;
    width: 106px;
    height: 106px;
    border-radius: 100%;
    margin: 0 auto;
    object-fit: none;
    @media screen and (max-width: 1600px) {
      width: 88px;
      height: 88px;
    }
    @media screen and (max-width: 1440px) {
      width: 88px;
      height: 88px;
    }
  }

  .get-more {
    display: flex;
    flex-flow: column nowrap;
    max-width: 475px;
    margin: -171px auto 0;
    &__title {
      @include landing-title;
      text-align: center;
      color: rgba($main-dark, .8);
      margin-bottom: 58px;
    }
    &__button {
      @include btn-teal;
      width: 255px;
      height: 63px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
    @media screen and (max-width: 1440px) {
      margin: -120px auto 0;
      &__title {
        margin-bottom: 20px;
        font-size: 30px;
      }
      &__button {
        @include btn-teal;
        width: 191px;
        height: 48px;
        margin: 0 auto;
      }
    }
  }

  .history-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    &__left, &__right {
      flex: 0 0 50%;
    }
    &__right {
      padding-left: 2.7%;
    }
    &__left {
      padding-top: 14px;
      padding-right: 6.7%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    &__item {
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      .item-animated-border__1, .item-animated-border__2, .item-animated-border__3 {
        position: absolute;
        content: "";
        display: block;
        border: 2px solid #2DCCD3;
        border-radius: 7px;
        opacity: 0;
        transition: .4s;
        $offset: 0;
        top: $offset;
        left: $offset;
        right: $offset;
        bottom: $offset;
      }
       .item-animated-border__1 {
        opacity: 1;
      }
       &:hover .item-animated-border__1 {
        opacity: 0;
      }
      .item-animated-border__2 {
        $offset: 3px;
        top: $offset;
        left: $offset;
        right: $offset;
        bottom: $offset;

      }
      &:hover .item-animated-border__2 {
        animation: blink 0.6s linear 0.2s;
        }
      .item-animated-border__3 {
        $offset: 6px;
        top: $offset;
        left: $offset;
        right: $offset;
        bottom: $offset;
      }
       &:hover .item-animated-border__3 {
          opacity: 1;
          transition-delay: .4s;
        }
      .history-list__date {
        font-weight: 700;
        line-height: 108.69%;
        letter-spacing: 0.06em;
        color: $main-dark;
      }
      .history-list__description {
        letter-spacing: 0.06em;
        line-height: 132.69%;
        text-align: center;
        color: rgba($main-dark, .7);
      }
    }
    &__item-1 {
      width: $history-1-w;
      height: 192px;
      margin-left: $history-7-w + $history-5-w + $history-3-w;
      .history-list__date {
        font-size: 50px;
        margin-bottom: 26px;
      }
      .history-list__description {
        font-size: 25px;
      }
      @media screen and (max-width: 1600px) {
        height: 160px;
        .history-list__date {
          font-size: 41px;
          margin-bottom: 21px;
        }
        .history-list__description {
          font-size: 20px;
        }
      }
      @media screen and (max-width: 1440px) {
        height: 144px;
        .history-list__date {
          font-size: 37px;
          margin-bottom: 12px;
        }
      }
    }
    &__item-2 {
      width: $history-2-w;
      height: 171px;
      margin-right: $history-6-w + $history-4-w;
      .history-list__date {
        font-size: 50px;
      }
      .history-list__description {
        font-size: 25px;
      }
      @media screen and (max-width: 1600px) {
        height: 152px;
        .history-list__date {
          font-size: 44px;
        }
        .history-list__description {
          font-size: 20px;
        }
      }
      @media screen and (max-width: 1440px) {
        height: 128px;
        .history-list__date {
          font-size: 37px;
        }
        .history-list__description {
          font-size: 18px;
        }
      }
    }
    &__item-3 {
      width: $history-3-w;
      height: 116px;
      margin-left: $history-7-w + $history-5-w;
      margin-bottom: 21px;
      .history-list__date {
        font-size: 50px;
      }
      .history-list__description {
        font-size: 16px;
      }
      @media screen and (max-width: 1600px) {
        height: 96px;
        .history-list__date {
          font-size: 41px;
        }
        .history-list__description {
          font-size: 13px;
        }
      }
      @media screen and (max-width: 1440px) {
        height: 87px;
        .history-list__date {
          font-size: 33px;
        }
        .history-list__description {
          font-size: 12px;
        }
      }
    }
    &__item-4 {
      width: $history-4-w;
      height: 116px;
      margin-right: $history-6-w;
      margin-bottom: 16px;
      .history-list__date {
        font-size: 30px;
      }
      .history-list__description {
        font-size: 16px;
      }
      @media screen and (max-width: 1600px) {
        height: 96px;
        .history-list__date {
          font-size: 25px;
        }
        .history-list__description {
          font-size: 13px;
        }
      }
      @media screen and (max-width: 1440px) {
        height: 87px;
        .history-list__date {
          font-size: 22px;
        }
        .history-list__description {
          font-size: 12px;
        }
      }
    }
    &__item-5 {
      width: $history-5-w;
      height: 75px;
      margin-left: $history-7-w;
      margin-bottom: 12px;
      .history-list__date {
        font-size: 20px;
      }
      .history-list__description {
        font-size: 10px;
      }
      @media screen and (max-width: 1600px) {
        // height: 96px;
        width: 125px;
        .history-list__date {
          font-size: 16px;
        }
        .history-list__description {
          font-size: 12px;
        }
      }
      @media screen and (max-width: 1440px) {
        height: 56px;
        .history-list__date {
          font-size: 15px;
        }
        .history-list__description {
          font-size: 10px;
        }
      }
    }
    &__item-6 {
      width: $history-6-w;
      height: 59px;
      margin-bottom: 16px;
      .history-list__date {
        font-size: 16px;
      }
      @media screen and (max-width: 1600px) {
        width: 90px;
        height: 49px;
        .history-list__date {
          font-size: 14px;
        }
        .history-list__description {
          font-size: 12px;
        }
      }
      @media screen and (max-width: 1440px) {
        height: 44px;
        width: 80px;
      }
    }
    &__item-7 {
      width: $history-7-w;
      height: 44px;
      margin-bottom: 13px;
      .history-list__date {
        font-size: 16px;
      }
      @media screen and (max-width: 1600px) {
        width: 80px;
        height: 36px;
        .history-list__date {
          font-size: 14px;
        }
        .history-list__description {
          font-size: 12px;
        }
      }
      @media screen and (max-width: 1440px) {
        // width: 80px;
        // height: 36px;
        .history-list__date {
          font-size: 14px;
        }
        .history-list__description {
          font-size: 12px;
        }
      }
    }
  }

  .history-list-element {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-sizing: border-box;

    svg {
      width: 100%;
      height: 100%;
      border-radius: 7px;
      transition: all .3s linear;
    }

    &__content {
      position: absolute;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    &__border {
      width: 100%;
      height: 100%;
      rx: 7px;
      ry: 7px;
      stroke-width: 2px;
      border-radius: 7px;
      stroke: $main-light;
      fill: transparent;
    }
  }
</style>

<script>

export default {

};
</script>
