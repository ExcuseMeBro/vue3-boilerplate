<template>
  <div class="flex items-center justify-center h-screen w-full">
    <vee-form
      :validation-schema="schema"
      :initial-values="userData"
      @submit="register"
    >
      <FInput
        v-for="field in formFields"
        :key="field.name"
        :attrs="field"
        :opt-attrs="field?.optAttrs"
      />

      <!-- Country -->
      <label class="form-control min-w-80">
        <div class="label">
          <span class="label-text">Country</span>
        </div>
        <vee-field
          as="select"
          name="country"
          class="select select-bordered w-full max-w-xs"
        >
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
          <option value="Germany">Germany</option>
          <option value="Africa">Africa</option>
        </vee-field>
        <div class="label">
          <span class="label-text-alt"
            ><ErrorMessage class="text-red-600 text-xs" name="country"
          /></span>
        </div>
      </label>

      <button
        :disabled="reg_in_submission"
        class="shadow-lg mt-3 pt-3 pb-3 w-full text-white bg-indigo-500 hover:bg-indigo-400 rounded-full cursor-pointer"
        type="submit"
        value="Create account"
      >
        Create Account
      </button>
    </vee-form>
    <pre>{{ form }}</pre>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { IFormField } from '@/core/models'
import FInput from '@/core/components/common/form/FInput.vue'
import { IForm } from '../models/form'

const { t } = useI18n()

const schema = reactive({
  username: 'required|min:3|max:50|alpha_spaces',
  email: 'required|min:3|max:20|email',
  age: 'required|min_value:1|max_value:100',
  password: 'required',
  password_confirmation: 'password_mismatch:@password',
  country: 'required|country_excluded:Africa',
})

const userData = reactive({
  country: 'USA',
})

const reg_in_submission = ref(false)
const reg_show_alert = ref(false)
const reg_alert_variant = ref('bg-indigo-500')
const reg_alert_msg = ref('Please wait! Account is being registered.')

const formFields = ref<IFormField[]>([
  {
    name: 'username',
    type: 'text',
    placeholder: 'Enter username',
    label: t('username'),
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Enter email',
    label: t('email'),
  },
  {
    name: 'age',
    type: 'number',
    placeholder: 'Enter age',
    label: t('age'),
    mask: '###',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
    label: t('password'),
  },
  {
    name: 'password_confirmation',
    type: 'password',
    placeholder: 'Enter password confirm',
    label: t('password_confirmation'),
  },
])

const form = ref()
function register(values: IForm) {
  reg_show_alert.value = true
  reg_in_submission.value = true
  reg_alert_variant.value = 'bg-indigo-500'
  reg_alert_msg.value = 'Please wait! Your account is being created.'

  reg_alert_variant.value = 'bg-blue-500'
  reg_alert_msg.value = 'Success! Your account has been created.'

  form.value = values
}
</script>

<style scoped></style>
