<template>
  <div class="MyToast">
    <div class="MyToast__image" />

    <div class="MyToast__content" v-if="'default' in $slots">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.MyToast {
  &__image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 40px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIj48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zMDAgMGMxNjUuNjg1IDAgMzAwIDEzNC4zMTUgMzAwIDMwMFM0NjUuNjg1IDYwMCAzMDAgNjAwYy0xMDcuMTggMC0yMDYuMjE4LTU3LjE4LTI1OS44MDgtMTUwcy01My41OS0yMDcuMTggMC0zMDBTMTkyLjgyIDAgMzAwIDBabTAgNTBDMTYxLjkyOSA1MCA1MCAxNjEuOTI5IDUwIDMwMHMxMTEuOTI5IDI1MCAyNTAgMjUwIDI1MC0xMTEuOTI5IDI1MC0yNTBTNDM4LjA3MSA1MCAzMDAgNTBabTEyLjUgMTk1LjAxNmEyNSAyNSAwIDAgMSAxMi41IDIxLjY1djE2Ni42NjdjLS4xOCAxMy43MzItMTEuMjY4IDI0LjgyLTI1IDI1LTEzLjczMi0uMTgtMjQuODItMTEuMjY4LTI1LTI1VjI2Ni42NjdhMjUgMjUgMCAwIDEgMzcuNS0yMS42NTFabTAtMTAwYTI1IDI1IDAgMCAxIDEyLjUgMjEuNjV2MTYuNjY3Yy0uMTggMTMuNzMyLTExLjI2OCAyNC44Mi0yNSAyNS0xMy43MzItLjE4LTI0LjgyLTExLjI2OC0yNS0yNXYtMTYuNjY2YTI1IDI1IDAgMCAxIDM3LjUtMjEuNjUxWiIvPjwvc3ZnPg==');
    background-size: 100% 100%;
  }

  &__content {
    margin-top: 1em;
  }
}
</style>
