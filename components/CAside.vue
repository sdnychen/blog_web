<script lang="ts" setup>
import { TimeOutline, HeartOutline, ChatboxEllipsesOutline } from "@vicons/ionicons5"

</script>

<template>
  <div class="aside">
    <div class="author">
      <div class="avatar">
        <img class="avatar-img" src="/public/favicon.ico" alt="头像">
      </div>
      <div class="name">
        SDNYCHEN
      </div>
      <div class="motto">
        用这生命中的每一秒，给自己一个不后悔的未来
      </div>
    </div>
    <div class="tags">
      <div class="title">
        标签
      </div>
      <div class="content">
        <div class="tag" style="background-color: aqua;">
          Vue3
        </div>
      </div>
    </div>
    <div class="latest">
      <div class="title">
        最新文章
      </div>
      <div class="content">
        <div class="post">
          <div class="thumbnail">
            <img class="img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" alt="文章收徒">
          </div>
          <div class="info">
            <div class="post-title">
              基于Python的Nginx的日志管理分析系统的设计与实现
            </div>
            <div class="time">
              <n-icon>
                <TimeOutline />
              </n-icon>
              <span>2小时前</span>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="thumbnail">
            <img class="img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" alt="文章收徒">
          </div>
          <div class="info">
            <div class="post-title">
              文章标题2
            </div>
            <div class="time">
              <n-icon>
                <TimeOutline />
              </n-icon>
              <span>2小时前</span>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="thumbnail">
            <img class="img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" alt="文章收徒">
          </div>
          <div class="info">
            <div class="post-title">
              文章标题1
            </div>
            <div class="time">
              <n-icon>
                <TimeOutline />
              </n-icon>
              <span>2小时前</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comments">
      <div class="title">
        热门评论
      </div>
      <div class="content">
        <div class="comment">
          <div class="text">
            这是一条很长很长很长很长很长很长很长很长很长很长很长很长很长很长的不正经的评论
          </div>
          <div class="info">
            <div class="info-item">
              <n-icon>
                <HeartOutline />
              </n-icon>
              <span>0</span>
            </div>
            <div class="info-item">
              <n-icon>
                <ChatboxEllipsesOutline />
              </n-icon>
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="comment">
          <div class="text">
            这是一条很长很长很长很长很长很长很长很长的不正经的评论
          </div>
          <div class="info">
            <div class="info-item">
              <n-icon>
                <HeartOutline />
              </n-icon>
              <span>0</span>
            </div>
            <div class="info-item">
              <n-icon>
                <ChatboxEllipsesOutline />
              </n-icon>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ad">
      <img class="ad-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" alt="11">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > div {
    padding: 20px;
    border-radius: 16px;
    border: 1px solid getColor(aside-frame-color);
    background-color: getColor(aside-bg-color);
  }
}
.title {
  font-size: 2.2rem;
  margin-bottom: 10px;
}
.author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  .avatar-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: bisque;
  }
  .name {
    font-size: 2rem;
    font-weight: 500;
  }
  .motto {
    text-align: center;
  }
}
.tags {
  .content {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
}
.latest {
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .post {
    display: flex;
    gap: 10px;
  }
  .img {
    width: 100px;
    height: 100px;
    border-radius: 16px;
  }
  .post-title {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 10px;
    @include multi-line-elliptical(3)
  }
  .time {
    display: flex;
    align-items: center;
    .n-icon {
      position: relative;
      top: 1px;
      margin-right: 4px;
      font-size: 2rem;
    }
  }
}
.comments {
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.6rem;
    margin-top: 6px;
  }
  .info-item {
    display: flex;
    align-items: center;
  }
  .n-icon {
    margin-right: 4px;
    font-size: 1.8rem;
  }
}
.ad {
  .ad-img {
    width: 100%;
    height: 160px;
  }
}
</style>
