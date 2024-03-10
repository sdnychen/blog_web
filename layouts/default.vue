<script lang="ts" setup>

</script>

<template>
  <div class="main-box">
    <LayoutsHeader />
    <div class="main-content">
      <slot />
    </div>
    <LayoutsFooter />
  </div>
</template>

<style lang="scss" scoped>
.main-box {
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
  margin: 0 auto;
  width: $content-width;
}
</style>
