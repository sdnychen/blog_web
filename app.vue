<script lang="ts" setup>
import { NConfigProvider, type GlobalThemeOverrides } from "naive-ui"

// Navice UI样式
const themeOverrides: GlobalThemeOverrides = {
  Input: {
    borderFocus: "",
    borderHover: "",
    boxShadowFocus: "",
    border: ""
  }
}

</script>

<template>
  <div>
    <n-config-provider :theme-overrides="themeOverrides">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </n-config-provider>
  </div>
</template>

<style lang="scss">

</style>
