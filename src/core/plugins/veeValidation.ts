import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  not_one_of as excluded,
  max,
  max_value as maxVal,
  min,
  min_value as minVal,
  required,
} from '@vee-validate/rules'
import {
  configure,
  defineRule,
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm,
} from 'vee-validate'
import type { App } from 'vue'
import i18n from '@/core/plugins/i18n'

const validationMessageKeys: Record<string, string> = {
  required: 'validation.required',
  min: 'validation.min',
  max: 'validation.max',
  alpha_spaces: 'validation.alphaSpaces',
  email: 'validation.email',
  min_value: 'validation.minValue',
  max_value: 'validation.maxValue',
  excluded: 'validation.excluded',
  country_excluded: 'validation.countryExcluded',
  password_mismatch: 'validation.passwordMismatch',
}

export default {
  install(app: App) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)
    defineRule('password_mismatch', confirmed)

    configure({
      generateMessage: ({ field, rule }) => {
        const messageKey = validationMessageKeys[rule?.name ?? ''] ?? 'validation.invalid'

        return i18n.global.t(messageKey, { field })
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    })
  },
}
