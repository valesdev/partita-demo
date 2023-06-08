<template>
  <div>
    <input
      ref="root"
      type="text"
      v-model="formState.foo"
      placeholder="type some value for foo"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const root = ref<HTMLInputElement | null>(null)

defineProps<{
  formState: { foo?: string }
}>()

onMounted(() => {
  if (root.value !== null) {
    root.value.focus()
  }
})
</script>
