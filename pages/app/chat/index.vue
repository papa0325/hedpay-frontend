<template>
  <page-component>
    <section class="chat" ref="chat">
      <chat-message
        class="chat__message"
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </section>
    <template v-slot:footer>
      <chat-form/>
    </template>
  </page-component>
</template>

<script src="./script.js">
</script>

<style src="./style.scss" lang="scss" scoped/>
