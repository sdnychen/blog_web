<script lang="ts" setup>
import { PersonOutline, CalendarOutline, BookOutline, ChevronBack, ChevronForward } from "@vicons/ionicons5"

const route = useRoute()
const article = "<p>aaa</p>"
</script>

<template>
  <div class="content">
    <main class="main">
      <div class="main-img">
        <img class="img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" alt="">
      </div>
      <div class="title">
        <h1>{{ route.params.name }}</h1>
      </div>
      <div class="info">
        <div class="auther">
          <n-icon>
            <PersonOutline />
          </n-icon>
          <span class="text">{{ "SDNYCHEN" }}</span>
        </div>
        <div class="date">
          <n-icon>
            <CalendarOutline />
          </n-icon>
          <span class="text">{{ "2024/03/11" }}</span>
        </div>
        <div class="read-time">
          <n-icon>
            <BookOutline />
          </n-icon>
          <span>预计阅读{{ 2 }}分钟</span>
        </div>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <article class="article" v-html="article" />
      <div class="article-recommend">
        <div class="previous">
          <n-icon>
            <ChevronBack />
          </n-icon>
          <span>上一篇文章</span>
        </div>
        <div class="next">
          <span>下一篇文章</span>
          <n-icon>
            <ChevronForward />
          </n-icon>
        </div>
      </div>
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
  .main-img {
    .img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 16px;
      @include shadowImg;
    }
  }
  .title {
    text-align: center;
    margin: 40px 0 30px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 1.4rem;
    margin: 1.6rem 0;
    & > div {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .n-icon {
      font-size: 1.8rem;
    }
  }
  .article-recommend {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 60px;
    font-size: 1.6rem;
    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .n-icon {
      position: relative;
      top: 1px;
    }
  }
  .hr {
    height: 1px;
    background-color: getColor(hr-color);
  }
}
.aside {
  width: $aside-width;
}
</style>
