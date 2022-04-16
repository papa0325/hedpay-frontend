<template>
  <article class="message" :class="{ 'message_sent': message.sender.type === 'user'}">
    <div class="message__header">
      {{ $t(`chat.${message.sender.type}`)}}
    </div>
    <div class="message__body">
      <div class="message__text">
        {{ message.message }}
      </div>
    </div>
    <div class="message__meta">
      {{ $d(message.timestamp * 1000 ) }}
    </div>
    <div
      v-if="message.attachments.length"
      class="attachments_panel"
    >
     <preview-attachment
       v-for="attachment in message.attachments"
       :label="attachment.file"
       :key="attachment.file"
     />
    </div>
  </article>
</template>

<script>
import previewAttachment from '~/components/app/chat/preview-attachment';

export default {
  name: 'chat-message',
  components: {
    previewAttachment,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  $offset: 10px;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid $stroke;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-size: 14px;
  &__header {
    margin-bottom: $offset;
    font-size: 16px;
  }

  &__body {
    margin-bottom: $offset;
  }
  &__text {
    color: $main-dark;
    opacity: 0.5;
    word-break: break-all;
  }
  &__meta {
    align-self: flex-end;
    font-size: 13px;
    color: $main-dark;
    opacity: 0.5;

  }
  &.message_sent {
    align-self: flex-end;
    background: $gradient;
    border-color: transparent;
    color: white;
    .message__text {
      color: white;
      opacity: 1;
    }
    .message__meta {
      color: white;
      opacity: 1;
    }
  }
}
.attachments_panel {
  margin-top: 10px;
}
</style>
