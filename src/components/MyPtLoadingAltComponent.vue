<template>
  <div class="MyPtLoadingAlt">
    <div class="MyPtLoadingAlt__image" />

    <div class="MyPtLoadingAlt__content" v-if="'default' in $slots">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.MyPtLoadingAlt {
  padding: 1em;
  background-color: #ffffff;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  overflow: hidden;

  white-space: pre-line;

  &__image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 40px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGc+PGcgaWQ9ImMiPjxnIGlkPSJiIj48cGF0aCBpZD0iYSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMTAiIGQ9Ik01MCAyNVYxMCIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIG9wYWNpdHk9Ii44IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzAgNTAgNTApIi8+PHVzZSB4bGluazpocmVmPSIjYSIgb3BhY2l0eT0iLjY0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgNTAgNTApIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2IiIG9wYWNpdHk9Ii41MTIiIHRyYW5zZm9ybT0icm90YXRlKC05MCA1MCA1MCkiLz48L2c+PHVzZSB4bGluazpocmVmPSIjYyIgb3BhY2l0eT0iLjI2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCA1MCA1MCkiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDUwIDUwOyAzMCA1MCA1MDsgNjAgNTAgNTA7IDkwIDUwIDUwOyAxMjAgNTAgNTA7IDE1MCA1MCA1MDsgMTgwIDUwIDUwOyAyMTAgNTAgNTA7IDI0MCA1MCA1MDsgMjcwIDUwIDUwOyAzMDAgNTAgNTA7IDMzMCA1MCA1MDsiLz48L2c+PC9zdmc+');
    background-size: 100% 100%;
  }

  &__content {
    margin-top: 0.5em;
  }
}
</style>
