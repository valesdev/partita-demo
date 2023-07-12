<template>
  <div class="MyPtPtr">
    <template v-if="props.state === 'pending_release'">
      release to refresh
    </template>

    <template v-else-if="props.state === 'loading'">
      refreshing&hellip;
    </template>

    <template v-else-if="props.state === 'loaded'">
      refreshed
    </template>

    <template v-else>
      pull to refresh
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  state: string
}>()
</script>

<style lang="scss">
.MyPtPtr {
  line-height: 20px;
}
</style>
