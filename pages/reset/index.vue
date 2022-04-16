<template>
  <div class="reset">
    <div class="row">
      <client-only>
        <ValidationObserver v-if="step === 1" tag="div" class="form" v-slot="{ handleSubmit }">
          <div class="form__title">Restore password</div>

          <ValidationProvider
            class="input-row"
            tag="div"
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              :class="{'error': errors[0]}"
              @keydown.enter="handleSubmit(sendCode)"
            />
            <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
          </ValidationProvider>
          <button class="submit" @click="handleSubmit(sendCode)">Log in</button>
          <nuxt-link class="form__link" to="/sign-in">Return to login</nuxt-link>
        </ValidationObserver>

        <div class="form reset--step2" v-else-if="step === 2">
          <div class="form__title form__title">Check your email</div>
          <div
            class="form__subtitle form__subtitle"
          >An email has been sent to your email address with instructions on how to proceed</div>
          <nuxt-link tag="button" class="submit" to="/sign-in">Ok</nuxt-link>
        </div>

        <ValidationObserver v-else-if="step === 3" tag="div" class="form" v-slot="{ handleSubmit }">
          <div class="form__title">Reset password</div>

          <ValidationProvider
            class="input-row"
            tag="div"
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              :class="{'error': errors[0]}"
              @keydown.enter="handleSubmit(reset)"
            />
            <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            class="input-row"
            tag="div"
            v-slot="{ errors }"
            name="code"
            rules="required"
          >
            <label for="code">Reset code</label>
            <input
              type="text"
              id="code"
              v-model="resetCode"
              :class="{'error': errors[0]}"
              @keydown.enter="handleSubmit(reset)"
            />
            <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            class="input-row"
            tag="div"
            v-slot="{ errors }"
            name="pass"
            rules="password"
            vid="confirmation"
          >
            <label for="pass">Password</label>
            <input
              type="password"
              id="pass"
              v-model="password"
              :class="{'error': errors[0]}"
              @keydown.enter="handleSubmit(reset)"
            />
            <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            class="input-row"
            tag="div"
            v-slot="{ errors }"
            name="passRepeat"
            rules="password|confirmed:confirmation"
          >
            <label for="passRepeat">Repeat password</label>
            <input
              type="password"
              id="passRepeat"
              v-model="passwordRepeat"
              :class="{'error': errors[0]}"
              @keydown.enter="handleSubmit(reset)"
            />
            <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
          </ValidationProvider>

          <button class="submit" @click="handleSubmit(reset)">Log in</button>
          <nuxt-link class="form__link" to="/sign-in">Return to login</nuxt-link>
        </ValidationObserver>
      </client-only>
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
