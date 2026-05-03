<template>
  <main class="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-base-200 px-6 py-12">
    <vee-form
      class="card w-full max-w-md border border-base-300 bg-base-100 shadow-xl"
      :validation-schema="schema"
      :initial-values="userData"
      @submit="register"
    >
      <div class="card-body">
        <h1 class="card-title text-2xl">{{ t('form.title') }}</h1>

        <div v-if="alertMessage" class="alert" :class="alertVariant" role="alert">
          <span>{{ alertMessage }}</span>
        </div>

        <FInput v-for="field in formFields" :key="field.name" :attrs="field" />

        <label class="form-control min-w-80">
          <span class="label pb-1">
            <span class="label-text">{{ t('form.country') }}</span>
          </span>
          <vee-field as="select" name="country" class="select select-bordered w-full max-w-xs">
            <option v-for="country in countries" :key="country" :value="country">
              {{ country }}
            </option>
          </vee-field>
          <span class="label pt-1">
            <ErrorMessage class="label-text-alt text-xs text-error" name="country" />
          </span>
        </label>

        <button :disabled="isSubmitting" class="btn btn-primary mt-3 w-full" type="submit">
          <span v-if="isSubmitting" class="loading loading-spinner loading-sm"></span>
          {{ t('form.submit') }}
        </button>

        <pre v-if="form" class="mt-4 overflow-auto rounded-box bg-base-200 p-4 text-xs">{{ form }}</pre>
      </div>
    </vee-form>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import FInput from '@/core/components/common/form/FInput.vue'
import type { IFormField } from '@/core/models'
import type { IForm } from '@/modules/main/models/form'

const { t } = useI18n()

const schema = reactive({
  username: 'required|min:3|max:50|alpha_spaces',
  email: 'required|min:3|max:50|email',
  age: 'required|min_value:1|max_value:100',
  password: 'required|min:8',
  password_confirmation: 'password_mismatch:@password',
  country: 'required|country_excluded:Africa',
})

const userData = reactive({
  country: 'USA',
})
const countries = ['USA', 'Mexico', 'Germany', 'Africa']

const isSubmitting = ref(false)
const alertVariant = ref('alert-info')
const alertMessage = ref('')
const form = ref<IForm | null>(null)

const formFields = computed<IFormField[]>(() => [
  {
    name: 'username',
    type: 'text',
    placeholder: t('form.placeholders.username'),
    label: t('form.fields.username'),
  },
  {
    name: 'email',
    type: 'email',
    placeholder: t('form.placeholders.email'),
    label: t('form.fields.email'),
  },
  {
    name: 'age',
    type: 'number',
    placeholder: t('form.placeholders.age'),
    label: t('form.fields.age'),
    mask: '###',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: t('form.placeholders.password'),
    label: t('form.fields.password'),
  },
  {
    name: 'password_confirmation',
    type: 'password',
    placeholder: t('form.placeholders.passwordConfirmation'),
    label: t('form.fields.passwordConfirmation'),
  },
])

function register(values: IForm) {
  isSubmitting.value = true
  alertVariant.value = 'alert-info'
  alertMessage.value = t('form.pleaseWait')

  form.value = values
  alertVariant.value = 'alert-success'
  alertMessage.value = t('form.success')
  isSubmitting.value = false
}
</script>
