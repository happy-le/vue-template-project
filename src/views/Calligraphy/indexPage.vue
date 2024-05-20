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
      str: '永历八年春,永历八年春永历八年春'
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
  width: 200px;
  display: flex;
  flex-wrap: wrap;
}

</style>

