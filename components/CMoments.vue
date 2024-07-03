<script lang="ts" setup>
// const showReplyInput = ref(true)

</script>

<template>
    <div class="moments-box">
        <div class="issuer">
            <div class="avatar">
                <img class="avatar-img" src="/favicon.ico" alt="1">
            </div>
            <span class="username">
                <span>SDNYCHEN</span>
                <div class="info">
                    <div class="time">
                        <span>发布于 </span>
                        <span>2024-03-16 11:05</span>
                    </div>
                </div>
            </span>
        </div>
        <div class="content-text">
            {{ '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容' }}
        </div>
        <div class="content-img">
            <n-image-group>
                <n-image v-if="false" class="one-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
                <div v-else class="img-box">
                    <n-image src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
                    <n-image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                    <n-image src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                    <n-image src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
                </div>
            </n-image-group>
        </div>
        <div class="other">
            <div class="comment-btn">评论({{ 1 }})</div>
        </div>
        <div class="comment">
            <CComment :show-top="false" :show-avatar="false" />
        </div>
    </div>
</template>

<style lang="scss" scope>
.moments-box {
    .issuer {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 16px;

        .info {
            display: flex;
            gap: 20px;
            font-size: 1.4rem;
            color: getColor(minor-text-color);
        }
    }

    .content-text {
        font-size: 1.8rem;
    }

    .content-img {
        margin-top: 20px;

        .img-box {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            gap: 10px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover !important;
            }
        }
    }

    .other {
        display: flex;
        gap: 20px;
        line-height: 60px;
        font-size: 1.4rem;
        color: getColor(minor-text-color);

        .comment-btn {
            cursor: pointer;
        }
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
}
</style>
