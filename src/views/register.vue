<template>
  <PtView class="ViewRegister">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>Reigster</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page “Reigster” goes here.</p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageA' })">Push Page A</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageB' })">Push Page B</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.hide('auth')">Close Auth view stack</a>
      </p>
      <PtHomeIndicator />
    </PtViewContent>
  </PtView>
</template>

<script>
export default {}
</script>
