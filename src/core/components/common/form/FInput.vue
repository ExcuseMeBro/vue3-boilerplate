<template>
  <label class="form-control min-w-80">
    <span class="label pb-1">
      <span class="label-text">{{ attrs.label }}</span>
    </span>
    <vee-field
      v-maska
      :name="attrs.name"
      class="input input-bordered w-full max-w-xs"
      :class="attrs.class"
      :type="attrs.type"
      :placeholder="attrs.placeholder"
      :data-maska="attrs.mask"
    />
    <span class="label pt-1">
      <ErrorMessage class="label-text-alt text-xs text-error" :name="attrs.name" />
    </span>
  </label>
</template>

<script setup lang="ts">
import type { IFormField } from '@/core/models'

interface Props {
  attrs: IFormField
}

defineProps<Props>()
</script>
