<template>
  <div class="sign-in-content px-0 py-1 d-flex justify-content-center">
    <section class="sign-in-section">
      <div class="sign-in-container d-flex flex-column flex-xl-row justify-content-between align-content-start pl-md-5" v-if="!pending2fa">
        <client-only>
          <ValidationObserver class="sign-in-h d-flex flex-column  align-items-center col-12 col-xl-5 pl-xl-5 pr-xl-0" v-slot="{ handleSubmit }">
            <div class="d-flex flex-column pr-md-4 px-2">
              <div class="FS-32 FCDark FW600 mb-2">{{ $t("auth.form.heading") }}</div>
              <div class="FS-26 FCBlue FW600">{{ $t("auth.form.sign_in_please") }}</div>
              <!-- Email field -->
              <ValidationProvider
                class="sign-in-row form-group mt-2"
                tag="div"
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <label for="email" class="FCBlue FS-14 ml-3">
                  {{$t("auth.form.email")}}
                </label>
                <input
                  class="form-control FS-16 InputF"
                  type="email"
                  id="email"
                  v-model="email"
                  :class="{ error: errors[0] }"
                  @keydown.enter="handleSubmit(signIn)"
                  placeholder="Your email"
                />
                <span class="error-msg" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>
              <!-- Password field -->
              <ValidationProvider
                class="sign-in-row form-group mt-2"
                tag="div"
                v-slot="{ errors }"
                name="password"
                rules="required"
              >
                <div class="d-flex justify-content-between col-12 px-0">
                  <label for="password" class="FCBlue FS-14 ml-3">{{
                    $t("auth.form.password")
                  }}</label>
                  <nuxt-link class="FCBlue FS-15 text-right" to="/reset">{{
                    $t("auth.form.account_recovery_link")
                  }}</nuxt-link>
                </div>
                <input
                  class="form-control FS-16 InputF"
                  type="password"
                  id="password"
                  v-model="password"
                  :class="{ error: errors[0] }"
                  @keydown.enter="handleSubmit(signIn)"
                  placeholder="********"
                />
                <span class="error-msg" v-if="errors[0]"
                  >*{{ errors[0] }}</span
                >
              </ValidationProvider>
              <!-- Remember me -->
              <div class="sign-in-row form-group mt-2 d-flex align-items-center px-3">
                <input
                  class=""
                  id="Remember"
                  type="checkbox"
                  checked="checked"
                />
                <label class="FS16 FCDark" for="Remember">Remember me</label>
              </div>
              <!-- Captcha -->
              <div class="form__captcha">
                <recaptcha
                  @error="onCaptchaError"
                  @success="onCaptchaSuccess"
                  @expired="onExpired"
                />
                <div class="form__er">
                  <div v-if="getEr(0)">Enter reCaptcha</div>
                </div>
              </div>
            </div>
            <!-- Sign in Button -->
            <button class="BlueButton mt-4 mr-sm-5" @click="handleSubmit(preludeSignIn)">
              {{ $t("auth.buttons.sign_in") }}
            </button>
          </ValidationObserver>
        </client-only>
        <!-- Woman field-->
        <div class="sign-in-h col-12 col-xl-7 pt-0 px-xl-0 d-flex flex-xl-column flex-flex-reverse align-items-center">
          <div class="pl-xl-3 pr-xl-0 pr-5 sign-in-image">
            <img class="col-12 pl-3 pr-0" style="max-width: 600px;" src="~assets/images/media/Hedpay-Login-Women.png" />
          </div>
          <div class="px-lg-3 mt-3">
            <p class="FS-26 FCDark FW600">{{ $t("auth.misc.no_account") }}</p>
            <p class="FS-26 FCBlue FW600 mb-3 text-left">{{ $t("auth.form.sign_up_please") }}</p>
            <button class="DarkButton ml-lg-0 ml-sm-3" @click="$router.push('/sign-up')">
              {{ $t("auth.buttons.open_account") }}
            </button>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="sign-in__2fa">
          <div class="form form--2fa">
            <client-only>
              <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
                <div class="form__title">{{ $t("auth.form.2fa") }}</div>
                <ValidationProvider
                  class="input-row"
                  tag="div"
                  v-slot="{ errors }"
                  name="code2fa"
                  rules="required"
                >
                  <label for="code2fa">{{ $t("auth.form.code") }}</label>
                  <input
                    ref="code2fa"
                    type="text"
                    id="code2fa"
                    v-mask="'######'"
                    v-model="code2fa"
                    :class="{ error: errors[0] }"
                    @keydown.enter="handleSubmit(signIn)"
                  />
                  <span class="error-message" v-if="errors[0]"
                    >*{{ errors[0] }}</span
                  >
                </ValidationProvider>

                <button class="submit" @click="handleSubmit(signIn)">
                  Log in
                </button>
              </ValidationObserver>
            </client-only>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style src="./style.scss" lang="scss" scoped>
</style>
<style lang="scss">
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
<script src="./script.js"></script>
