<template>
  <PtView class="ViewLogin">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <a href="javascript:void(0);" @click="$view.hide({ stack: 'auth' })">Close</a>
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
        <a href="javascript:void(0);" @click="$view.hide({ stack: 'auth' })">Close Auth view stack</a>
      </p>
    </PtViewContent>
  </PtView>
</template>
