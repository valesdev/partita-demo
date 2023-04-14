<template>
  <PtView class="ViewRoot">
    <PtStatusbar />

    <PtTitlebar>
      <template #center>Home</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Hello world!</p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'Contents', params: { foo } })">Push Page Contents</a><br>(with prop <code>foo</code>=<input v-model="foo" type="text" />)
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'Modals' })">Push Page Modals</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'Sliders' })">Push Page Sliders</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageA' })">Push Page A</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.push({ name: 'PageB' })">Push Page B</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="$view.show({ stack: 'auth' })">Show Auth view stack</a>
      </p>
      <hr />
      <p>
        <a href="https://github.com/valesdev/partita" target="_blank">Github repo</a>
      </p>
      <PtHomeIndicator />
    </PtViewContent>
  </PtView>
</template>

<script>
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
</script>
