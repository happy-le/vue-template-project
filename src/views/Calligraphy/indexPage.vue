<template>
  <div class="word_content">
    <WordCell v-for="(item, index) in strArr" :key="index">
      {{ item }}
    </WordCell>
  </div>
</template>

<script>
import WordCell from './components/WordCell.vue'
import text from "./text"
export default {
  components: {
    WordCell
  },
  data() {
    return {
      pageLen: 8 * 12, // 每页纸张的格子数
      str: text.text3 // 待生成的文字
    }
  },

  computed: {
    // 如果文字个数不足，则使用空格补齐
    strArr: function () {
      return this.str.split('').concat(new Array(this.pageLen - this.str.length))
    }
  }
}
</script>

<style lang="scss" scoped>
.word_content {
  // 目前只支持A5纸张大小
  width: 1440px; // 纸张宽度 14.4cm * 100
  height: 2080px; // 纸张高度 20.8cm * 100
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;

  padding: 140px 40px 150px 180px; // 页边距
  box-sizing: border-box;

  border: 1px solid;
  transform: scale(0.3, 0.3);
  transform-origin: 0 0;
}
</style>
