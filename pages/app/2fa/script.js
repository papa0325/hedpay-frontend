import packageCard from '~/components/app/package-card';
import Modal from '~/components/app/modal';
import NumericInput from '~/components/app/numeric-input/NumericInput.vue';

export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    packageCard,
    Modal,
    NumericInput,
  },
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    GoTo(param1, param2) {
      if (param1 == 'Step1' && param2 == 'Step2') {
        this.step1 = false;
        this.step2 = true;
      }
      if (param1 == 'Step2' && param2 == 'Step1') {
        this.step2 = false;
        this.step1 = true;
      }
      if (param1 == 'Step2' && param2 == 'Step3') {
        this.step2 = false;
        this.step3 = true;
      }
      if (param1 == 'Step3' && param2 == 'Step2') {
        this.step3 = false;
        this.step2 = true;
      }
      if (param1 == 'Step3' && param2 == 'Step4') {
        this.step3 = false;
        this.step4 = true;
      }
      if (param1 == 'Step4' && param2 == 'Step1') {
        this.step4 = false;
        this.step1 = true;
      }
      if (param1 == 'Step4' && param2 == 'Step3') {
        this.step4 = false;
        this.step3 = true;
      }
    },
  },
  directives: {
  },
};
