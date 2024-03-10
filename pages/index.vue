<script lang="ts" setup>
// 轮播图组件数据类型
interface carouselType {
  uid: string,
  title: string,
  src: string,
  url: string,
  alt: string,
  type: number
}

const carouselList: carouselType[] = reactive([
  {
    uid: "1",
    title: "",
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    url: "/about",
    alt: "1",
    type: 1
  },
  {
    uid: "1",
    title: "",
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    url: "/",
    alt: "1",
    type: 1
  },
  {
    uid: "1",
    title: "",
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
    url: "/",
    alt: "1",
    type: 1
  }
])
</script>

<template>
  <div class="box">
    <div class="banner">
      <CjCarousel :data="carouselList" auto-play show-dots show-arrow />
    </div>
    <div class="content">
      <main class="main">
        <div class="title">
          文章推荐
        </div>
      </main>
      <aside class="aside">
        aside
      </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.main {
  flex: 1;
  background-color: rgb(98, 154, 202);
}
.aside {
  width: 300px;
  background-color: rgb(35, 233, 190);
}
</style>
