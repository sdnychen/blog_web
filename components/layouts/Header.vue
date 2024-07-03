<script lang="ts" setup>
import { ChevronDown, Search } from "@vicons/ionicons5"

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
    },
    {
        uid: "4",
        title: "动态",
        url: "/moments",
        child: []
    }
])

// 是否登录(测试用)
// const hasLogin = ref(true)

// 跳转个人中心
// const gotoPersion = async() => {
//   await navigateTo("/")
// }

// 搜索模态框
const showSearchModal = ref(false)
const searchContent = ref("")
const handleSearch = () => {
    showSearchModal.value = false
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
                    <n-icon v-if="menuItem.child.length > 0" :component="ChevronDown" />
                </NuxtLink>
                <div v-if="menuItem.child.length > 0" class="submenu-box">
                    <div v-for="submenuItem in menuItem.child" :key="submenuItem.uid" class="submenu-item">
                        <NuxtLink :to="submenuItem.url" class="submenu-link" active-class="sub-active">{{
                            submenuItem.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <!-- 搜索 -->
            <div class="menu-item search-btn">
                <div class="menu-link" @click="showSearchModal = true">
                    <n-icon :component="Search" />
                </div>
                <n-modal v-model:show="showSearchModal">
                    <div class="search-modal">
                        <n-icon :component="Search" />
                        <input v-model="searchContent" class="search-input" type="text" maxlength="50"
                            placeholder="搜索内容" @keydown.enter="handleSearch">
                    </div>
                </n-modal>
            </div>
        </div>
        <div class="personal">
            <!-- <div class="other" />
            <div v-if="hasLogin" class="info">
                <img class="avatar" src="/favicon.ico" alt="头像" @click="navigateTo('/')">
                <span class="username">{{ 'sdnyhen' }}</span>
                <n-icon :component="CaretDown" />
                <div class="prision-menu">
                    <div class="prision-menu-item">
                        <span>个人中心</span>
                    </div>
                    <div class="prision-menu-item">
                        <span>退出登录</span>
                    </div>
                </div>
            </div>
            <div v-else class="login">
                <NuxtLink to="/login">登录</NuxtLink>
            </div> -->
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
        position: relative;
        font-size: 1.8rem;

        &:hover>.submenu-box {
            display: block;
        }
    }

    .menu-link {
        padding: 1rem 1.6rem;
        display: flex;
        align-items: center;
        cursor: pointer;

        .n-icon {
            font-size: 2rem;
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
        padding: 18px 0;
        width: 180px;
        z-index: 1;

        .submenu-link {
            display: block;
            padding: 6px 18px;

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
    font-size: 1.6rem;
    display: flex;
    align-items: center;

    .other {
        flex: 1;
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 1.4rem;
        position: relative;
        padding: 10px 0;
        width: auto;

        .avatar {
            border-radius: 50%;
            margin-right: 10px;
        }

        .username {
            margin-right: 4px;
        }

        &:hover .prision-menu {
            display: block;
        }
    }

    .prision-menu {
        display: none;
        position: absolute;
        top: 46px;
        right: -20px;
        font-size: 1.6rem;
        background-color: getColor(main-gbc);
        @include shadowMenu;
        border-radius: 8px;
        padding: 10px 0;
        z-index: 1;

        .prision-menu-item {
            text-align: center;
            cursor: pointer;
            width: 100px;
            padding: 6px 18px;

            &:hover {
                color: getColor(main-color);
            }
        }
    }
}

.search-modal {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 40px;
    border-radius: 16px;
    background-color: getColor(main-gbc);
    font-size: 2.2rem;
    position: relative;
    top: -300px;

    .search-input {
        font-size: 1.8rem;
    }
}
</style>
