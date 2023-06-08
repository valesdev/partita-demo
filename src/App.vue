<template>
  <PtViewStack name="main" />

  <PtModal
    position="bottom" 
    :visible="$view.currentVisibles.includes('auth')"
    @update:visible="$event ? $view.show('auth') : $view.hide('auth')"
  >
    <PtViewStack name="auth" />
  </PtModal>

  <PtHolder />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ViewModule } from 'partita'

onMounted(() => {
  ViewModule.push({ name: 'Root' })
  ViewModule.push({ stack: 'auth', name: 'Login' })
})
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 14px;
  line-height: 1.4;
}
</style>
