<template>
  <div class="word_List_content" ref="wordList">
    <template v-for="(item, index) in inputWordList" :key="index">
      <br />
      <div :class="{ user_word: item.type === 1, robot_word: item.type === 2 }">
        {{ item.word }}
      </div>
      <br />
    </template>
  </div>

  <div class="sorce_content">得分：{{ sorce }}</div>

  <el-button @click="resetGame" class="reset_button">
    <el-icon :size="20">
      <RefreshRight />
    </el-icon>
    <span style="vertical-align: middle"> 重新开始 </span>
  </el-button>

  <div class="user_input">
    <el-input
      v-model="wordInput"
      :disabled="gameFinish"
      @keyup.enter="userSubmit"
      placeholder="请输入成语……"
    />
    <el-button :disabled="gameFinish" type="primary" @click="userSubmit">提交</el-button>
  </div>
</template>

<script>
import { wordArr } from './data'
export default {
  data() {
    return {
      gameFinish: false,
      sorce: 0,

      inputWordList: [],
      wordInput: ''
      // inputWordList: [
      //   { type: 1, word: '出山泉水' },
      //   { type: 2, word: '出山泉水' },
      //   { type: 1, word: '水淹七军' },
      //   { type: 2, word: '军临城下' }
      // ],
      // wordInput: '下不为例'
    }
  },

  mounted() {
    this.resetGame()
  },

  methods: {
    userSubmit() {
      if (!this.judgeWord(this.wordInput).code) {
        this.$message({ type: 'warning', message: '输入的不是成语！' })
        return
      }

      // 第一次
      if (this.inputWordList.length === 0) {
        this.inputWordList.push({ type: 1, word: this.wordInput })
        this.wordInput = ''

        const { code, message, data } = this.generateWord()
        if (code) {
          this.inputWordList.push({ type: 2, word: data })
          this.sorce++
        } else {
          this.$message({ type: 'warning', message })
          this.finishGame()
        }
        return
      }

      // 第n次
      // 是否已使用
      if (!this.judgeUsed(this.wordInput).code) {
        this.$message({ type: 'warning', message: this.judgeUsed(this.wordInput).message })
        return
      }

      // 是否首尾相接
      if (!this.judegConformToRules(this.wordInput).code) {
        this.$message({
          type: 'warning',
          message: this.judegConformToRules(this.wordInput).message
        })
        return
      }

      // 添加成语
      this.inputWordList.push({ type: 1, word: this.wordInput })
      this.wordInput = ''
      this.sorce++
      const { code, message, data } = this.generateWord()
      if (code) {
        this.inputWordList.push({ type: 2, word: data })
      } else {
        this.$message({ type: 'warning', message })
        this.finishGame()
      }

      // console.log("")
      this.$nextTick(() => {
        this.$refs.wordList.scrollTop = 99999
      })
    },

    // 判断输入的是否是成语
    judgeWord(word) {
      if (wordArr.includes(word)) {
        return { code: 1, message: 'success' }
      } else {
        return { code: 0, message: '输入的信息不是成语！' }
      }
    },

    // 判断成语是否已使用
    judgeUsed(word) {
      const inputWord = this.inputWordList.map((i) => i.word)
      if (!inputWord.includes(word)) {
        return { code: 1, message: 'success' }
      } else {
        return { code: 0, message: '输入的成语已使用过！' }
      }
    },

    // 判断输入的成语是否符合规则【首尾相接】
    judegConformToRules(word) {
      var lastWord = this.inputWordList[this.inputWordList.length - 1].word
      if (word[0] === lastWord[lastWord.length - 1]) {
        return { code: 1, message: 'success' }
      } else {
        return { code: 0, message: '输入的成语不符合首尾相接！' }
      }
    },

    // 生成成语
    generateWord() {
      const lastWord = this.inputWordList[this.inputWordList.length - 1].word
      const lastWordCharacter = lastWord[lastWord.length - 1]

      const applyWordArr = wordArr.filter((i) => i[0] === lastWordCharacter)
      if (applyWordArr.length <= 0) {
        return { code: 0, message: '不存在符合规则的成语了！' }
      }

      let tempWord = ''
      for (const item of applyWordArr) {
        if (this.judgeUsed(item).code === 1) {
          tempWord = item
          break
        }
      }

      if (tempWord) {
        return { code: 1, message: 'success', data: tempWord }
      } else {
        return { code: 0, message: '不存在符合规则的成语了！' }
      }
    },

    // 结束游戏
    finishGame() {
      this.gameFinish = true
      this.$msgbox
        .confirm(`您的得分为${this.sorce}`, '胜利✌️', {
          confirmButtonText: '重新开始',
          cancelButtonText: '取消',
          type: 'success',
          center: true
        })
        .then(() => {
          this.resetGame()
        })
    },

    resetGame() {
      this.gameFinish = false
      this.sorce = 0
      this.inputWordList = [
        {
          type: 2,
          word: wordArr[Math.ceil(Math.random() * wordArr.length)]
        }
      ]
      this.wordInput = ''
    }
  }
}
</script>

<style scoped>
.word_List_content {
  width: 400px;
  height: 300px;
  padding: 12px;
  border: 1px #000000 solid;
  border-radius: 10px;
  background-color: #f3f3f3;

  overflow: auto;

  .user_word,
  .robot_word {
    padding: 10px 8px;
    line-height: 20px;
    border-radius: 8px;
    display: inline-block;
    box-shadow: var(--el-box-shadow-light);
  }

  .user_word {
    background-color: #a9ea7a;
    text-align: right;
    float: right;
  }

  .robot_word {
    background-color: #ffffff;
  }
}

.sorce_content {
  position: absolute;
  top: 40px;
  left: 450px;
  font-family: '华文彩云'; /*设置字体*/
  font-size: 32px; /*设置字体大小*/
  font-weight: bolder; /*设置字体粗细*/
  -webkit-text-stroke: 1px #0000ff; /*文字描边*/
  -webkit-text-fill-color: transparent; /*设置文字的填充颜色*/
}

.reset_button {
  position: absolute;
  left: 450px;
  top: 240px;
}

.user_input {
  width: 400px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .el-input {
    width: 300px;
    margin-right: 12px;
  }
}
</style>
