<template>
  <label class="form-control min-w-80">
    <div class="label">
      <span class="label-text">{{ attrs?.label }}</span>
    </div>
    <vee-field
      v-maska
      :name="attrs?.name"
      class="input input-bordered w-full max-w-xs"
      :class="attrs?.class"
      :type="attrs?.type"
      :placeholder="attrs?.placeholder"
      :data-maska="attrs?.mask"
    />
    <div class="label">
      <span class="label-text-alt"
        ><ErrorMessage class="text-red-600 text-xs" :name="attrs?.name"
      /></span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { IFormField } from '@/core/models'
interface Props {
  attrs: IFormField
}

defineProps<Props>()
</script>

<style scoped></style>
