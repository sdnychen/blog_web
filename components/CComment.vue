<script lang="ts" setup>
const showReplyInput = ref(true)

</script>

<template>
  <div>
    <div class="top">
      <div class="comment-title">
        <span class="text">评论</span>
        <span class="num">{{ 21 }}</span>
      </div>
      <div class="sort">
        <span class="active">最热</span>
        <span class="sep">|</span>
        <span>最新</span>
      </div>
    </div>
    <div class="comment-input">
      <div class="avatar">
        <img class="avatar-img" src="favicon.ico" alt="1">
      </div>
      <CTextarea placeholder="请输入评论" />
    </div>
    <div class="comment-list">
      <div class="avatar">
        <img class="avatar-img" src="favicon.ico" alt="1">
      </div>
      <div class="right">
        <div class="title">
          <span class="username">SDNYCHEN</span>
        </div>
        <div class="content">
          {{ '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容' }}
        </div>
        <div class="info">
          <div class="time">2024-03-16 11:05</div>
          <div class="reply">回复</div>
        </div>
        <div class="comment-list reply-list">
          <div class="avatar">
            <img class="avatar-img reply-avatar-img" src="favicon.ico" alt="1">
          </div>
          <div class="right">
            <div class="title reply-title">
              <span class="username">SDNYCHEN</span>
            </div>
            <div class="content">
              {{ '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容' }}
            </div>
            <div class="info">
              <div class="time">2024-03-16 11:05</div>
              <div class="reply">回复</div>
            </div>
          </div>
        </div>
        <div v-if="showReplyInput" class="comment-input">
          <div class="avatar">
            <img class="avatar-img" src="favicon.ico" alt="1">
          </div>
          <CTextarea placeholder="请输入评论" />
        </div>
        <div class="hr" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
$left-gap: 16px; // 左侧间距

.top {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  .comment-title {
    display: flex;
    align-items: center;
    gap: 6px;
    .text {
      font-size: 2.4rem;
    }
    .num {
      font-size: 1.4rem;
      color: getColor(minor-text-color);
    }
  }
  .sort {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.6rem;
    color: getColor(minor-text-color);
    .sep {
      font-size: 1rem;
      color: getColor(main-text-color);
    }
    .active {
      color: getColor(main-text-color);
    }
  }
}

.comment-list {
  display: flex;
  margin-left: $left-gap;
  .title {
    font-size: 1.6rem;
    line-height: 36px;
    font-weight: 300;
  }
  .reply-title {
    line-height: 28px;
  }
  .content {
    font-size: 1.8rem;
  }
  .info {
    display: flex;
    gap: 20px;
    line-height: 40px;
    color: getColor(minor-text-color);
  }
  .hr {
    height: 1px;
    background-color: getColor(hr-color);
  }
}

// 评论/回复
.comment-input {
  display: flex;
  margin-left: $left-gap;
  margin-bottom: 30px;
}

// 所有头像
.avatar {
  .avatar-img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 16px;
    background-color: aqua;
  }
  .reply-avatar-img {
    width: 30px;
    height: 30px;
  }
}
</style>
