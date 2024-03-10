<script lang="ts" setup>
import { ChevronBack, ChevronForward } from "@vicons/ionicons5"

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  autoPlay: {
    type: Boolean
  },
  showDots: {
    type: Boolean
  },
  interval: {
    type: Number,
    default: 5000
  },
  showArrow: {
    type: Boolean
  }
})

// 自动轮播
let timer: string | number | undefined | NodeJS.Timeout
onMounted(() => {
  if (props.autoPlay) {
    timer = setInterval(() => {
      handleChangeArrow("next")
    }, 3000)
  }
})
onUnmounted(() => {
  clearInterval(timer)
})

// 鼠标移入暂停轮播
const handleHeanMouseEnter = () => {
  clearInterval(timer)
}
// 鼠标移出开始轮播
const handleHeanMouseLeave = () => {
  if (props.autoPlay) {
    timer = setInterval(() => {
      handleChangeArrow("next")
    }, props.interval)
  }
}

// 复制
const dataList = reactive([...props.data])

// 当前页数下标
const currPageIndex = ref(0)

// 箭头切换
const handleChangeArrow = (type: string) => {
  if (type === "previous") {
    // if (currPageIndex.value <= 0) {return}
    if (currPageIndex.value === 0) {
      currPageIndex.value = dataList.length - 1
      return
    }
    currPageIndex.value--
  } else if (type === "next") {
    // if (currPageIndex.value >= dataList.length - 1) {return}
    if (currPageIndex.value === dataList.length - 1) {
      currPageIndex.value = 0
      return
    }
    currPageIndex.value++
  }
}

// Dot切换
const handleChangeDot = (index: number) => {
  currPageIndex.value = index
}

</script>

<template>
  <div class="carousel-box" @mouseenter="handleHeanMouseEnter" @mouseleave="handleHeanMouseLeave">
    <div class="carousel-item" :style="{'right': `${currPageIndex * 100}%`}">
      <img
        v-for="(item) in dataList"
        :key="item.uid"
        class="carousel-img"
        :src="item.src"
        :alt="item.alt"
        @click="navigateTo(item.url)"
      >
    </div>
    <div v-if="showArrow" class="arrows">
      <div class="arrow" @click="handleChangeArrow('previous')">
        <ChevronBack />
      </div>
      <div class="arrow" @click="handleChangeArrow('next')">
        <ChevronForward />
      </div>
    </div>
    <div v-if="showDots" class="dots">
      <div
        v-for="(item, index) in dataList.length"
        :key="item.uid"
        :class="['dot', currPageIndex === index ? 'dot-active' : '']"
        @click="handleChangeDot(index)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-box {
  position: relative;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 getColor(box-shadow-color);
  overflow: hidden;
  z-index: 0;
  &:hover .arrows{
    display: flex;
  }
}
.carousel-item {
  position: relative;
  display: flex;
  transition: .5s;
}
.carousel-img {
  min-width: 100%;
  height: 400px;
  object-fit: cover;
}

.arrows {
  position: absolute;
  display: none;
  align-items: center;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 98%;
}
.arrow {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #fff;
  width: 36px;
  height: 44px;
  background-color: rgb(129, 129, 129);
  border-radius: 4px;
  opacity: .6;
}

.dots {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  bottom: 10px;
  left: 0;
  width: 100%;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: .6;
  background-color: #fff;
  cursor: pointer;
}
.dot-active {
  opacity: 1;
}
</style>
