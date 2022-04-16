import Vue from 'vue';

import {
  ValidationProvider,
  ValidationObserver,
  extend, configure,
} from 'vee-validate';

import {
  required, email, length, numeric, confirmed, max, min_value, max_value, size, regex, ext,
} from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
export default ({ app }) => {
  configure({
  // this will be used to generate messages.
    defaultMessage: (_field, values) => app.i18n.t(`messages.${values._rule_}`, values),

  });
  extend('required', required);

  extend('email', email);

  extend('length', {
    ...length,
  });

  extend('numeric', {
    ...numeric,
  });
  extend('max', {
    ...max,
  });
  extend('size', {
    ...size,
  });
  extend('ext', {
    ...ext,
  });

  extend('confirmed', {
    ...confirmed,
  });

  // extend('max', {
  //   ...max,
  //   validate(value, [maxValue]) {
  //     if(value.length > Number(maxValue)) return false
  //   },
  // });
  extend('min_value', {
    ...min_value,
    message: 'The value must be greater than {min}',
  }),
  extend('max_value', {
    ...max_value,
    message: 'The value must be less than {max}',
  }),
  extend('password', {
    ...required,
    validate(value) {
      if (!value.length) return 'This field is required';

      const regExp = /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

      return regExp.test(value);
    },
  });
};
