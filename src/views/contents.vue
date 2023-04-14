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
      <p>The prop <code>foo</code> is: <code>{{ foo }}</code></p>
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

<script>
export default {
  props: {
    foo: { type: String, required: false, default: null }
  }
}
</script>
