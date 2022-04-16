<template>
    <Modal v-if="showModalProperty" :width="480" @close="closeCallback">
        <div class="e2m">
        <h5 class="e2m-heading">You must enable 2FA to perform this operation</h5>
            <div class="submit-wrap">
            <button class="cancel" @click="closeCallback">Cancel</button>
            <nuxt-link class="submit" tag="button" to="profile/?show2fa=true">Enable 2FA</nuxt-link>
            </div>
        </div>
    </Modal>
</template>
<script>
import Modal from '~/components/app/modal';

export default {
  components: {
    Modal,
  },
  props: {
    showModalProperty: {
      type: Boolean,
      required: true,
    },
    closeCallback: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.e2m {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  &-heading {
    font-weight: normal;
    color: #000000;
    opacity: 0.5;
  }
  .submit-wrap {
    margin-top: 40px;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      & > * {
        margin-bottom: 20px;
      }
    }
    .submit,
    .cancel {
      width: 160px;
      height: 56px;

      flex: 1;
      padding: 17px 34px;
      @media (max-width: 768px) {
        height: 40px;
      }
    }
    .submit {
      @include btn-teal;
      white-space: nowrap;
      text-decoration: none;
    }
    .cancel {
      @include btn-transparent;
      font-size: 18px;
      margin-right: 35px;
      @media (max-width: 768px) {
        margin-right: 20px;
      }
    }
  }
}
</style>
