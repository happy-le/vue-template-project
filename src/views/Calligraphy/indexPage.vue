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
      str: '见多识广察言观色高瞻远瞩'
    }
  },

  computed: {
    strArr: function () {
      return this.str.split('')
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.word_content {
  width: 250px;
  display: flex;
  flex-wrap: wrap;
}

</style>

