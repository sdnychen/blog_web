<script lang="ts" setup>

</script>

<template>
    <div class="box">
        <div class="top-card">
            个人动态
        </div>
        <div class="content">
            <div class="main">
                <div class="moments-item">
                    <CMoments />
                </div>
                <div class="moments-item">
                    <CMoments />
                </div>
            </div>
            <aside class="aside">
                <div class="about">
                    <CAside />
                </div>
            </aside>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.top-card {
    text-align: center;
    font-size: 3rem;
    padding: 30px 50px;
    border-radius: 16px;
    border: 1px solid getColor(tag-frame-color);
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

    .moments-item {
        margin-bottom: 30px;
        @include shadowImg;
        border-radius: 16px;
        padding: 40px 20px;
    }
}

.aside {
    width: $aside-width;
}
</style>
