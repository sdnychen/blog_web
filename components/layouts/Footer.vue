<script lang="ts" setup>

// 测试数据
const menu = reactive([
  {
    uid: "1",
    title: "关于",
    url: "/"
  },
  {
    uid: "2",
    title: "网站地图",
    url: "/"
  }
])

</script>

<template>
  <div class="footer">
    <div class="line bottom-line">
      <div class="info">
        <span class="copyright">
          <span>Copyright&nbsp;&nbsp;2024-{{ '2024' }}&nbsp;&nbsp;</span>
          <NuxtLink to="/"><b>CJBLOG</b></NuxtLink>
          <span>&nbsp;&nbsp;版权所有</span>
        </span>
        <span class="icp">
          <NuxtLink to="https://beian.miit.gov.cn" rel="noopener noreferrer nofollow">鲁ICP备20013741-1号</NuxtLink>
        </span>
      </div>
      <div class="menu">
        <NuxtLink v-for="item in menu" :key="item.uid" to="/">{{ item.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    box-shadow: 0 0 3px 0 getColor(box-shadow-color);
    background-color: getColor(footer-bgc);
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .bottom-line {
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    width: $content-width;
    margin: 0 auto;
    color: getColor(footer-bottom-text-color);
    font-size: 1.4rem;
    a {
      color: getColor(footer-bottom-text-color);
    }
    .info {
      flex: 1;
    }
    .menu {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.6rem;
    }
  }
</style>
