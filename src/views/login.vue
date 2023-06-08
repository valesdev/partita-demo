<template>
  <PtView class="ViewLogin">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <a href="javascript:void(0);" @click="$view.hide('auth')">Close</a>
      </template>
      <template #center>Login</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page “Login” goes here.</p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageA' })">Push Page A</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageB' })">Push Page B</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'Register' })">Push Page Reigster</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.hide('auth')">Close Auth view stack</a>
      </p>
      <PtHomeIndicator />
    </PtViewContent>
  </PtView>
</template>

<script setup lang="ts">
</script>
