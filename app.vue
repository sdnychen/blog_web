<script lang="ts" setup>
import { type GlobalThemeOverrides } from "naive-ui"

const themeOverrides: GlobalThemeOverrides = {
  Input: {
    countTextColor: "#e88080",
    borderHover: "1px solid #66CCCC",
    boxShadowFocus: ""
  },
  Checkbox: {
    colorChecked: "#66CCCC"
  }
}

</script>

<template>
  <div>
    <n-config-provider :theme-overrides="themeOverrides" preflight-style-disabled>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </n-config-provider>
  </div>
</template>

<style lang="scss">

</style>
