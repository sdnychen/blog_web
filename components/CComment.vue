<script lang="ts" setup>

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
        <img class="avatar-img" src="public/favicon.ico" alt="1">
      </div>
      <div class="input">
        <n-config-provider preflight-style-disabled>
          <n-input
            placeholder="自动调整尺寸"
            type="textarea"
            :autosize="{
              minRows: 1,
              maxRows: 5
            }"
          />
        </n-config-provider>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.top {
  display: flex;
  align-items: center;
  gap: 30px;
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
.comment-input {
  display: flex;
  margin: 20px 0;
  margin-left: 16px;
  .input {
    width: 100%;
  }
  .n-input {
    min-height: 50px;
    width: 100%;
  }
}
.avatar {
  .avatar-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 16px;
    background-color: aqua;
  }
}
</style>
