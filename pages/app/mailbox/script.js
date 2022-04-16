import ClickOutside from 'vue-click-outside';
import Qrcode from 'qrcode.vue';
import 'vue2-datepicker/index.css';
import Modal from '../../../components/app/modal';

export default {
  directives: {
    ClickOutside,
  },
  layout: 'app',
  middleware: 'auth',
  components: {
    Modal,
    Qrcode,
  },

};
