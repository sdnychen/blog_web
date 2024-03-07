<script lang="ts" setup>

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
        url: "/note1",
        child: []
      },
      {
        uid: "2-2",
        title: "笔记子菜单2",
        url: "/note2",
        child: []
      },
      {
        uid: "2-3",
        title: "笔记子菜单3",
        url: "/note3",
        child: []
      },
      {
        uid: "2-4",
        title: "笔记子菜单4",
        url: "/note4",
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

const hasLogin = ref(true)

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
          <svg v-if="menuItem.child.length > 0" class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-test" />
          </svg>
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
        <NuxtLink to="/personal">
          <img src="/public/favicon.ico" alt="头像">
          <span>{{ 'sdnychen' }}</span>
        </NuxtLink>
      </div>
      <div v-else class="login">
        <NuxtLink to="/login">登录</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  // logo样式
  .logo {
    flex: 1;
  }

  // 菜单样式
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;

    // 菜单活动样式
    .active,
    .sub-active {
      color: getColor(main-color);
    }

    // 菜单项样式
    .menu-item {
      cursor: pointer;
      position: relative;
      font-size: 18px;
      &:hover > .submenu-box {
        display: block;
      }
      .menu-link {
        padding: 10px 16px;
        &:hover {
          color: getColor(main-color);
        }
      }
    }

    .submenu-box {
      display: none;
      position: absolute;
      top: 36px;
      left: -10px;
      font-size: 16px;
      background-color: getColor(main-gbc);
      box-shadow: 0 0 4px getColor(box-shadow-color);
      border-radius: 8px;
      padding: 18px;
      width: 180px;
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
    }
  }
</style>
