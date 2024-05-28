<template>
  <div class="word_content">
    <WordCell v-for="(item, index) in strArr" :key="index">
      {{ item }}
    </WordCell>
  </div>
</template>

<script>
import WordCell from './WordCell.vue'
export default {
  components: {
    WordCell
  },

  props: {
    str: {
      type: String,
      required: true
    }
  },

  computed: {
    // 如果文字个数不足，则使用空格补齐
    strArr: function () {
      return this.str.split('')
    }
  }
}
</script>

<style lang="scss" scoped>
.word_content {
  // 目前只支持A5纸张大小
  flex-shrink: 0;
  width: 1480px; // 纸张宽度 14.8cm * 100
  height: 2100px; // 纸张高度 21.0cm * 100
  margin: 12px;
  position: relative;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: #ffffff;

  padding: 140px 40px 150px 180px; // 页边距
  box-sizing: border-box;

  // border: 1px solid;
  zoom: 0.1;
  // transform: scale(0.1, 0.1);
  // transform-origin: 0 0;
}
</style>