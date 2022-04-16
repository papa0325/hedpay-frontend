<template>
  <validation-observer slim v-slot="{ handleSubmit }">
    <form action="" class="chat__form" @submit.prevent="handleSubmit(sendMessage)">
      <div class="attachments__panel">
        <preview-attachment
          v-for="( attachment ) in attachments"
          :key="attachment.name"
          :file="attachment"
          @delete="deleteAttachment"
        />
      </div>
      <div class="message__form">
        <label class="form__label" for="send__message"></label>
        <validation-provider
          rules="max:1500"
          slim
        >

        <textarea
          name=""
          v-model.trim="message"
          :placeholder="$t('chat.message_placeholder')"
          id="send__message"
          cols="30"
          rows="10"
          class="form__textarea"
          @keydown.enter="onEnter($event, handleSubmit)"
        />

        </validation-provider>
        <button class="form__button message__attachment" type="button">
          <label
            class="file-upload"
          >
            <img src="~assets/img/attachment.svg" alt="Attach" class="button__icon">
            <validation-provider
              rules="size:1048|ext:jpg,png,pdf,docx"
              slim
              v-slot="{validate}"
            >
              <input
                id="file"
                type="file"
                class="file-upload__input"
                @change="handleFileUpload($event) || validate($event)"
                multiple
              >

            </validation-provider>
          </label>
        </button>
        <button class="form__button message__send">
          <img src="~assets/img/send.svg" alt="Send" class="button__icon">
        </button>
      </div>
      <div class="chat-form__counter" :class="{'counter_invalid': message.length > 1500}">
        {{ $t('chat.symbols') }} {{ `${message.length}/1500` }}
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { SEND_MESSAGE } from '~/store/user/consts';
import previewAttachment from '~/components/app/chat/preview-attachment';

export default {
  name: 'chat-form',
  components: { previewAttachment },
  data() {
    return {
      message: '',
      attachments: [],
      previews: [],
    };
  },
  methods: {
    async sendMessage() {
      if (!this.message && !this.attachments.length) {
        return;
      }
      const payload = this.preparePayload();
      try {
        await this.$store.dispatch(`user/${SEND_MESSAGE}`, payload);
        this.resetForm();
      } catch (e) {
        console.dir(e);
      }
    },
    onEnter(e, callback) {
      if (!e.ctrlKey) {
        e.preventDefault();
        callback(this.sendMessage());
      }
    },
    preparePayload() {
      const payload = new FormData();
      payload.append('message', this.message);
      this.attachments.forEach((file) => {
        payload.append('file', file);
      });
      return payload;
    },
    resetForm() {
      this.message = '';
      this.attachments = [];
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files);
      this.attachments = files;
    },
    deleteAttachment(payload) {
      this.attachments = this.attachments.filter((item) => item.name !== payload.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.attachments__panel {
  display: flex;
  flex-wrap: wrap;
}
.message__form {
  width: 100%;
  display: flex;
}

.form__textarea {
  @include profile-input;
  background-color: $LandingSubstrate;
  flex: 1;
  margin-right: 10px;
  min-height: 36px;
  resize: vertical;
}

.form__label {
  @media screen {
    display: none;
  }
}

.form__button {
  @include btn-teal;
  width: 36px;
  height: 36px;
}

.message__send {
  margin-left: 10px;
}

.file-upload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;

  &__input {
    display: none;
  }
}

.chat-form__counter {
  font-size: 13px;
  letter-spacing: 0.06em;
  opacity: 0.3;
  margin-top: 6px;
}

.counter_invalid {
  color: $red;
}
</style>
