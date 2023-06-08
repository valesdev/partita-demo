<template>
  <PtView class="ViewContents">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>Contents</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page “Contents” goes here.</p>
      <p>The prop <code>foo</code> is: <code>{{ props.foo }}</code></p>
      <PtHomeIndicator />
    </PtViewContent>
  </PtView>
</template>

<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: false, default: null }
})
</script>
