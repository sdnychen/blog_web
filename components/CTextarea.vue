<script lang="ts" setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "请输入"
  },
  minHeight: {
    type: Number,
    default: 20
  },
  maxHeight: {
    type: Number,
    default: 160
  },
  maxLength: {
    type: Number,
    default: 1000
  }
})

// 内容
const textareaContent = ref("")

// textarea自适应高度
const textarea = ref()
watch(textareaContent, () => {
  nextTick(() => {
    if (textarea.value.scrollHeight > props.maxHeight) {
      return
    }
    textarea.value.style.height = "0px"
    textarea.value.style.height = textarea.value.scrollHeight + "px"
  })
}, { immediate: true })
</script>

<template>
  <div class="input">
    <textarea ref="textarea" v-model="textareaContent" :placeholder="placeholder" :maxlength="maxLength" />
    <!-- <span class="word-num">{{ textareaContent.length }} / {{ maxLength }}</span> -->
  </div>
</template>

<style lang="scss" scope>
.input {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid getColor(minor-text-color);
  padding: 4px 10px;
  border-radius: 6px;
  position: relative;
}
textarea {
  width: 100%;
  resize: none;
  font-size: 1.6rem;
  font-weight: 300;
  color: getColor(main-text-color);
  line-height: 20px;
  // &::placeholder {
  //   color: aqua;
  // }
}
.word-num {
  position: absolute;
  right: 20px;
  bottom: 10px;
}
</style>
