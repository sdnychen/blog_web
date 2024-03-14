<script lang="ts" setup>

// 轮播图数据
const carouselList: CarouselType[] = reactive([
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

const postDataList: PostType[] = reactive([
  {
    uid: "1",
    title: "文章标题1",
    img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    alt: "一张图",
    tag: "Vue, Java",
    class: "笔记",
    abstract: "文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要",
    author: "SDNYCHEN",
    type: 1,
    status: 1,
    created: "2024/03/10",
    update: "2024/03/10",
    remark: ""
  },
  {
    uid: "2",
    title: "基于Python的Nginx的日志管理分析系统的设计与实现",
    img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    alt: "一张图",
    tag: "Vue, Java",
    class: "笔记",
    abstract: "文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要",
    author: "SDNYCHEN",
    type: 1,
    status: 1,
    created: "2024/03/10",
    update: "2024/03/10",
    remark: ""
  }
])
</script>

<template>
  <div class="box">
    <div class="banner">
      <CCarousel :data="carouselList" auto-play show-dots show-arrow />
    </div>
    <div class="content">
      <main class="main">
        <CWideCard :data="postDataList" />
        <CWideCard :data="postDataList" />
      </main>
      <aside class="aside">
        <div class="about">
          <CAside />
        </div>
      </aside>
    </div>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.aside {
  width: $aside-width;
}
</style>
