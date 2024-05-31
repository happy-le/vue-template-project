<template>
  <div>
    <el-button type="primary" @click="download">下载</el-button>
    <div class="page_list_content" id="pdfDom">
      <div :id="`page_index_${index + 1}`" class="page_item" v-for="(item, index) in pageTextArr" :key="index">
        <PgaeItem :str="item" />
      </div>
    </div>

  </div>
</template>

<script>
import PgaeItem from './components/PgaeItem.vue'
import text from './assets/text'
import { loadFile } from './assets/loadFile.js'

export default {
  components: {
    PgaeItem
  },
  data() {
    return {
      pageLen: 8 * 12, // 每页纸张的格子数
      allText: text.text, // 待生成的文字
      pageTextArr: []
    }
  },

  computed: {
    // 如果文字个数不足，则使用空格补齐
    strArr: function () {
      return this.str.split('').concat(new Array(this.pageLen - this.str.length).fill(' '))
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      while (this.allText.length >= this.pageLen) {
        this.pageTextArr.push(this.allText.slice(0, this.pageLen))
        this.allText = this.allText.slice(this.pageLen)
      }
      if (this.allText.length > 0) {
        this.pageTextArr.push(
          this.allText + new Array(this.pageLen - this.allText.length).fill(' ').join('')
        )
      }
    },

    download() {
      const pageListDom = document.getElementsByClassName("page_item")
      loadFile(pageListDom)
    }
  }
}
</script>

<style lang="scss" scoped>
.page_list_content {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  background: #f5f7fa;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;

  .page_item {
    zoom: 0.2;
    margin: 12px;
  }
}
</style>
