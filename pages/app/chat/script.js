import { mapGetters } from 'vuex';
import ChatMessage from '@/components/app/chat/chat-message';
import ChatForm from '@/components/app/chat/chat-form';
import { GET_MESSAGES, SUBSCRIBE_CHAT } from '@/store/user/consts';

export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    ChatForm,
    ChatMessage,
  },
  computed: {
    ...mapGetters({
      messages: 'user/getMessages',
      connection: 'connectionStatus',
    }),
  },
  updated() {
    const { chat } = this.$refs;

    if (!chat) return;
    // прокручиваем скролл вниз, при добавлении новых сообщений
    if (chat.scrollHeight !== this.scrollHeight) {
      chat.scrollTo(0, chat.scrollHeight);
      this.scrollHeight = chat.scrollHeight;
    }
  },
  watch: {
    connection: {
      async handler() {
        if (this.connection) {
          await this.$store.dispatch(`user/${GET_MESSAGES}`).catch((err) => { console.dir(err); });
          return this.$store.dispatch(`user/${SUBSCRIBE_CHAT}`);
        }
      },
      immediate: true,
    },
  },
};
