<script lang="ts" setup>

const article = "<p>加载评论中</p>"
</script>

<template>
  <div class="content">
    <main class="main">
      <div class="title">
        <h1>{{ '关于我' }}</h1>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <article class="article" v-html="article" />
      <div class="hr" />
      <ClientOnly fallback-tag="span" fallback="加载评论中...">
        <div class="comment">
          <CComment />
        </div>
      </ClientOnly>
    </main>
    <aside class="aside">
      <div class="about">
        <CAside />
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.main {
  flex: 1;
  .title {
    font-size: 1.4rem;
    text-align: center;
    margin: 40px 0 30px;
  }
  .hr {
    height: 1px;
    margin: 20px 0;
    background-color: getColor(hr-color);
  }
}
.aside {
  width: $aside-width;
}
</style>
