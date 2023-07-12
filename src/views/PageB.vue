<template>
  <PtView class="ViewPageB" @destroy.prevent="onViewDestroy">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>Page B</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page B goes here.</p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageA' })">Push Page A</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageB' })">Push Page B</a>
      </p>
      <PtHomeIndicator />
    </PtViewContent>
  </PtView>
</template>

<script setup lang="ts">
import { DialogModule, ViewDestroyEvent } from 'partita'

const onViewDestroy = (event: ViewDestroyEvent) => {
  DialogModule.confirm('Are you sure you want to go back?', 'Confirmation')
    .then(value => {
      if (!value) return

      event.runDefault()
    })
}
</script>
