<template>
  <Modal v-if="isShowingSendModal" :width="635" @close="closeSendModal">
    <div class="modal-send">
      <div class="withdraw__currency">
        <div class="withdraw__general-box">
          <div class="withdraw__currency__value">
            <span>{{ withdrawAmount ? beautifyAmount : 0 }}</span>
            <span>{{ selectedWallet.ticker }}</span>
          </div>
          <div class="withdraw__currency__rate">
            1 {{ selectedWallet.ticker }} =
            {{ selectedWallet.rate.toFixed(2) }} USD
          </div>
        </div>
        <div class="withdraw__information-box">
          <div class="information-table">
            <div
              class="information-table__row"
              v-if="selectedWallet.feeFixed || selectedWallet.feeRelative"
            >
              <span class="information-table__cell">Fee:</span>
              <span class="information-table__cell">
                0 %
              </span>
            </div>
            <div class="information-table__row">
              <span class="information-table__cell">Min.amount:</span>
              <span class="information-table__cell">
                {{ `${selectedWallet.valueMin} ${selectedWallet.ticker}` }}
              </span>
            </div>
            <div class="information-table__row">
              <span class="information-table__cell">Total:</span>
              <span class="information-table__cell">
                {{ `${total} ${selectedWallet.ticker}` }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }" tag="div" class="form">
        <ValidationProvider
          class="input-row"
          tag="div"
          v-slot="{ errors }"
          name="recipient"
          rules="required"
        >
          <label for="recipient">Recipient</label>
          <input
            type="text"
            :class="{ error: errors[0] }"
            v-model="withdrawRecipient"
            @keydown.enter="handleSubmit(onSubmitForm)"
          />
          <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="input-row"
          tag="div"
          v-slot="{ errors }"
          name="amount"
          rules="required"
        >
          <label for="amountSend">Amount</label>
          <div class="amount-wrap">
            <input
              type="text"
              v-currency="currencyOptionsSend"
              id="amountSend"
              :class="{ error: errors[0] }"
              v-model="withdrawAmount"
              @keydown.enter="handleSubmit(onSubmitForm)"
            />
            <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
            <button class="max" @click="setMaxAmountSend">Max</button>
          </div>
        </ValidationProvider>
        <ValidationProvider
          class="input-row"
          tag="div"
          v-slot="{ errors }"
          name="totp"
          rules="required"
        >
          <label for="recipientSend">2FA</label>
          <input
            type="text"
            id="recipientSend"
            :class="{ error: errors[0] }"
            v-model="withdraw2FA"
            v-mask="'######'"
            @keydown.enter="handleSubmit(onSubmitForm)"
          />
          <span class="error-message" v-if="errors[0]">*{{ errors[0] }}</span>
        </ValidationProvider>

        <div class="submit-wrap">
          <button class="cancel" @click="closeSendModal">Cancel</button>
          <button class="submit" @click="handleSubmit(onSubmitForm)">
            Send
          </button>
        </div>
      </ValidationObserver>
    </div>
  </Modal>
</template>
<script>
import { CurrencyDirective, parse } from 'vue-currency-input';
import BigNumber from 'bignumber.js';

import Modal from '~/components/app/modal';

export default {
  components: {
    Modal,
    BigNumber,
  },
  props: {
    isShowingSendModal: {
      required: true,
      type: Boolean,
    },
    closeSendModal: {
      required: true,
      type: Function,
    },
    selectedWallet: {
      required: true,
    },
    amountToSend: {
      required: false,
      type: Number,
      default: 0,
    },
    walletAddressToSend: {
      required: false,
      type: String,
    },
  },
  watch: {
    walletAddressToSend(newVal, oldVal) {
      this.withdrawRecipient = newVal;
    },
    amountToSend(newVal, oldVal) {
      this.amountToSend = newVal;
    },
  },
  data() {
    return {
      withdrawAmount: 0,
      withdrawRecipient: '',
      withdraw2FA: '',
    };
  },
  computed: {
    beautifyAmount() {
      const value = this.withdrawAmount;
      let newVal = value;
      if (typeof value === 'string') {
        newVal = Number(value.replace(',', '.'));
      }
      return Number(newVal.toFixed(6));
    },
    total() {
      let value = this.withdrawAmount;
      if (typeof value === 'string') {
        value = Number(value.replace(',', '.'));
      }
      return value;
    },
    currencyOptionsSend() {
      return {
        currency: null,
        precision: { min: 2, max: this.selectedWallet.decimals },
        allowNegative: false,
        valueRange: {
          min: this.selectedWallet.valueMin || 0,
          max: this.selectedWallet.balanceCrypto,
        },
      };
    },
  },
  mounted() {},
  methods: {
    setMaxAmountSend() {
      this.withdrawAmount = this.selectedWallet.balanceCrypto;
      this.withdrawAmount = this.withdrawAmount.toString().replace('.', ',');
      // this.withdrawAmount = this.withdrawAmount.toFixed(
      //   this.selectedWallet.decimals,
      //  );
    },
    calculateMaxAmount(balance, feeRelative, feeFixed, decimals) {
      let value = new BigNumber(balance);
      if (feeFixed) {
        value = value.minus(feeFixed);
      }
      if (feeRelative) {
        const fee = new BigNumber(feeRelative).dividedBy(100);
        const denominator = fee.plus(1);
        value = value.dividedBy(denominator);
      }
      value = Number(value.toFixed(decimals, 1));
      if (isNaN(value)) return 0;
      return value > 0 ? value : 0;
    },
    async onSubmitForm() {
      try {
        let formWithdraw = parse(this.withdrawAmount, this.currencyOptionsSend);
        formWithdraw = new BigNumber(formWithdraw)
          .shiftedBy(this.selectedWallet.decimals)
          .toFixed(0, 1);
        const data = {
          amount: formWithdraw,
          totp: this.withdraw2FA,
        };
        if (this.withdrawRecipient.length <= 15) {
          data.username = this.withdrawRecipient;
        } else {
          data.address = this.withdrawRecipient;
        }
        await this.$axios.post(
          `/profile/me/wallet/${this.selectedWallet.id}/send`,
          data,
        );
        this.closeSendModal();
        this.$notify({
          type: 'success',
          text:
            'Your request is accepted. After receiving the necessary number of confirmations from the network, the funds will be credited to your wallet',
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  directives: {
    currency: CurrencyDirective,
  },
};
</script>
<style lang="scss" scoped>
.withdraw,
.modal-send {
  &__currency {
    padding: 0;
    background: $background;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 47px;
    margin-top: 18px;
    display: flex;
    white-space: nowrap;
    justify-content: space-between;
    flex-direction: column;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
    .withdraw__general-box {
      max-width: 70%;
      padding: 50px 56px;
      @media (max-width: 768px) {
        padding: 22px;
      }
    }
    .withdraw__information-box {
      background-color: $main-light;
      height: inherit;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .information-table {
        width: 90%;
        font-size: 15px;
        color: $stroke;
        opacity: 0.6;
        &__row {
          display: flex;
          justify-content: space-between;
        }
        &__cell {
          padding: 6px;
        }
        @media (max-width: 768px) {
          font-size: 0.85em;
          &__row {
            // flex-flow: column;
            margin-bottom: 5px;
            .information-table__cell {
              padding: 2px;
            }
          }
        }
      }
      @media (max-width: 768px) {
        width: auto;
        padding: 10px;
        min-width: 45%;
      }
    }
    &__value {
      color: $main-dark;
      font-size: 40px;
      line-height: 47px;
      letter-spacing: 0.06em;
      margin-bottom: 30px;

      @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 20px;
        line-height: 38px;
      }
    }
    &__rate {
      color: rgba($main-dark, 0.5);
      letter-spacing: 0.06em;
      font-size: 17px;
      line-height: 20px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
    &__extra {
      margin-top: 16px;
      font-size: 14px;
      line-height: 16px;
      color: #052b43;
      opacity: 0.3;
    }
  }

  .form {
    button.max {
      @include btn-teal;
      min-width: 75px;
      height: 40px;
      margin-left: 20px;
    }
    .amount-wrap {
      display: flex;
      align-items: center;

      input {
        width: 100%;
      }
      @media (max-width: 600px) {
        justify-content: space-between;
        input {
          width: calc(100% - 95px);
        }
      }
    }
  }

  .submit-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    @media (max-width: 425px) {
      margin-top: 30px;
    }

    .submit,
    .cancel {
      height: 56px;
      flex: 1;

      @media (max-width: 425px) {
        height: 40px;
      }
    }
    .submit {
      @include btn-teal;
    }
    .cancel {
      @include btn-transparent;
      margin-right: 35px;
      @media (max-width: 425px) {
        margin-right: 20px;
      }
    }
  }
}
</style>
