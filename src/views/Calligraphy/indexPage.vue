<template>
  <div class="word_content">
    <WordCell v-for="(item, index) in strArr" :key="index">
      {{ item }}
    </WordCell>
  </div>
</template>

<script>
import WordCell from './components/WordCell.vue'
export default {
  components: {
    WordCell
  },
  data() {
    return {
      pageLen: 98, // 每一页字数个数
      str: '见多识广察言观色高瞻远瞩'
    }
  },

  computed: {
    strArr: function () {
      return this.str.split('').concat(new Array(86))
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.word_content {
  width: 1440px;
  height: 2080px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;

  background-color: rgba(218, 255, 196, 0.616);
  padding: 150px 0px 0px 300px;

  transform: scale(0.3, 0.3);
  transform-origin: 0 0;
}
</style>
