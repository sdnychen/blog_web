<script lang="ts" setup>

const route = useRoute()

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
    <div class="tag-info">
      <div class="info">
        <h1 class="title">
          {{ route.params.name }}
        </h1>
        <div class="num">
          文章数量：{{ 9 }}
        </div>
        <div class="intro">
          Linux是一款免费的操作系统，用户可以通过网络或其他途径免费获得，并可以任意修改其源代码。这是其他的操作系统所做不到的。
        </div>
      </div>
      <div class="tag-img">
        <img class="img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" alt="tag的首图">
      </div>
    </div>
    <div class="content">
      <main class="main">
        <CHighCard :data="postDataList" />
        <CHighCard :data="postDataList" />
        <CHighCard :data="postDataList" />
        <CHighCard :data="postDataList" />
      </main>
      <!-- <aside class="aside">
        <div class="about">
          <CAside />
        </div>
      </aside> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag-info {
  display: flex;
  margin: 0 auto;
  width: 800px;
  padding: 30px 50px;
  border-radius: 16px;
  background-color: getColor(tag-bg-color);
  border: 1px solid getColor(tag-frame-color);
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 30px;
  .title {
    font-size: 3rem;
  }
  .num {
    font-size: 1.8rem;
    color: getColor(minor-text-color);
  }
  .intro {
    font-size: 1.8rem;
  }
}
.tag-img {
  .img {
    width: 300px;
    height: 240px;
    border-radius: 12px;
  }
}

.content {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.main {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  row-gap: 60px;
}
.aside {
  width: $aside-width;
}
</style>
