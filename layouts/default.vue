<script lang="ts" setup>

</script>

<template>
  <div class="main">
    <HeaderMain />
    <slot />
    <FooterMain />
  </div>
</template>

<style lang="scss">
  .main {
    margin: 0 auto;
    width: $content-width;
  }
</style>
