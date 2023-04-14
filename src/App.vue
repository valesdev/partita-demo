<template>
  <PtViewStack stack="main" />

  <PtModal position="bottom" :visible="$view.currentVisibles.includes('auth')" @update:visible="$event ? $view.show({ stack: 'auth' }) : $view.hide({ stack: 'auth' })">
    <PtViewStack stack="auth" />
  </PtModal>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    this.$view.register({ stack: 'auth' })
    this.$view.push({ name: 'Root' })
    this.$view.push({ name: 'Login', stack: 'auth' })
  }
}
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
