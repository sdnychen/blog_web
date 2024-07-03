<script lang="ts" setup>
import type { PropType } from "vue"
import { CalendarOutline, PersonOutline, PricetagsOutline, BookOutline } from "@vicons/ionicons5"

defineProps({
    data: {
        type: Object as PropType<PostType[]>,
        required: true
    }
})

</script>

<template>
    <div class="card">
        <div class="thumbnail">
            <img class="img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                alt="item.alt">
        </div>
        <div class="info">
            <div class="title">{{ 'item.title' }}</div>
            <div class="basic-info">
                <div class="auther">
                    <n-icon :component="PersonOutline" />
                    <span class="text">{{ "SDNYCHEN" }}</span>
                </div>
                <div class="date">
                    <n-icon :component="CalendarOutline" />
                    <span class="text">{{ "2024/03/11" }}</span>
                </div>
                <div class="tags">
                    <n-icon :component="PricetagsOutline" />
                    <div class="tag" style="background-color: antiquewhite;">Linux</div>
                    <div class="tag" style="background-color: rgb(111, 231, 121);">Java</div>
                </div>
            </div>
            <div class="abstract">
                这是一个很长很长的测试，摘要这是一个很长很长的测试摘要，这是一个很长很长的测试摘要这是一个很长很长...
            </div>
            <div class="read">
                <div class="read-more">
                    Read More
                </div>
                <div class="read-time">
                    <n-icon :component="BookOutline" />
                    <span>预计阅读{{ 2 }}分钟</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    // align-items: center;
    gap: 26px;
}

.thumbnail {
    border-radius: 16px;
    overflow: hidden;
    @include shadowImg;

    .img {
        display: block;
        width: 360px;
        height: 260px;
        object-fit: cover;
    }
}

.info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    .title {
        font-size: 2.6rem;
        line-height: 32px;
        letter-spacing: 0.1rem;
    }

    .basic-info {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 1.4rem;

        &>div {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .n-icon {
            font-size: 1.8rem;
        }

        // .auther .text {
        //   cursor: pointer;
        //   color: getColor(main-color);
        // }
        .tags {
            display: flex;
            gap: 8px;
        }
    }

    .abstract {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 2.6rem;
    }

    .read {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        .read-more {
            font-size: 1.8rem;
            cursor: pointer;
            transition: .4s;

            &:hover {
                color: getColor(main-color);
            }
        }

        .read-time {
            display: flex;
            align-items: center;
            gap: 6px;
            color: getColor(minor-text-color);

            .n-icon {
                font-size: 2rem;
            }
        }
    }
}

.next-page {
    color: getColor(main-color);
    font-size: 1.6rem;
    letter-spacing: 4px;
    font-weight: 600;
    border: 1px solid getColor(main-color);
    border-radius: 8px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
</style>
