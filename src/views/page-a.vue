<template>
  <PtView class="ViewPageA">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>Page A</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page A goes here.</p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageA' })">Push Page A</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageB' })">Push Page B</a>
      </p>
    </PtViewContent>
  </PtView>
</template>
