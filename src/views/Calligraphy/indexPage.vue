<template>
  <div class="word_content">
    <PgaeItem :str="strArr.join('')" />
  </div>
</template>

<script>
import PgaeItem from './components/PgaeItem.vue'
import text from './assets/text'

export default {
  components: {
    PgaeItem
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
      return this.str.split('').concat(new Array(this.pageLen - this.str.length).fill(' '))
    }
  }
}
</script>

<style lang="scss" scoped></style>
