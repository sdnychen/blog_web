<script lang="ts" setup>
import { ChevronDown } from "@vicons/ionicons5"

// 菜单列表(测试用)
const menu = reactive([
  {
    uid: "1",
    title: "首页",
    url: "/",
    child: []
  },
  {
    uid: "2",
    title: "笔记",
    url: "",
    child: [
      {
        uid: "2-1",
        title: "笔记子菜单1",
        url: "/",
        child: []
      },
      {
        uid: "2-2",
        title: "笔记子菜单2",
        url: "/",
        child: []
      }
    ]
  },
  {
    uid: "3",
    title: "关于我",
    url: "/about",
    child: []
  }
])

// 是否登录(测试用)
const hasLogin = ref(true)

// 跳转个人中心
const gotoPersion = async() => {
  await navigateTo("/")
}

</script>

<template>
  <div class="header">
    <div class="logo">
      logo
    </div>
    <div class="menu">
      <div v-for="menuItem in menu" :key="menuItem.uid" class="menu-item">
        <NuxtLink :to="menuItem.url" class="menu-link" active-class="active">
          {{ menuItem.title }}
          <n-icon v-if="menuItem.child.length > 0">
            <ChevronDown />
          </n-icon>
        </NuxtLink>
        <div v-if="menuItem.child.length > 0" class="submenu-box">
          <div v-for="submenuItem in menuItem.child" :key="submenuItem.uid" class="submenu-item">
            <NuxtLink :to="submenuItem.url" class="submenu-link" active-class="sub-active">{{ submenuItem.title }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="personal">
      <div v-if="hasLogin" class="info">
        <img class="avatar" src="/favicon.ico" alt="头像" @click="gotoPersion">
        <span>{{ 'sdnychen' }}</span>
      </div>
      <div v-else class="login">
        <NuxtLink to="/login">登录</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: $content-width;
    margin: 0 auto;
  }
  // logo样式
  .logo {
    flex: 1;
    font-size: 3rem;
  }

  // 菜单样式
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0; // TODO: 不合理

    // 菜单活动样式
    .active,
    .sub-active {
      color: getColor(main-color);
    }

    // 菜单项样式
    .menu-item {
      cursor: pointer;
      position: relative;
      font-size: 1.8rem;
      &:hover > .submenu-box {
        display: block;
      }
    }

    .menu-link {
      padding: 1rem 1.6rem;
      display: flex;
      align-items: center;
      .n-icon {
        font-size: 20px;
      }
      &:hover {
        color: getColor(main-color);
      }
    }

    .submenu-box {
      display: none;
      position: absolute;
      top: 46px;
      left: -10px;
      font-size: 1.6rem;
      background-color: getColor(main-gbc);
      @include shadowMenu;
      border-radius: 8px;
      padding: 18px;
      width: 180px;
      z-index: 1;
      .submenu-link {
        display: block;
        padding: 6px 0;
        &:hover {
          color: getColor(main-color);
        }
      }
    }
  }

  // 个人信息样式
  .personal {
    flex: 1;
    text-align: right;
    .info {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      font-size: 1.4rem;
      .avatar {
        border-radius: 50%;
      }
    }
  }
</style>
