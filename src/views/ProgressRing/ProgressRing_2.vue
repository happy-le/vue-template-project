<script>
export default {
  data() {
    return {
      circularNodeNum: 25, // 圆环节点个数（最好可以被360整除）
      progress: 84 // 百分比进度
    }
  },
  computed: {
    // 圆环每个节点的旋转角度
    rotationAngle: function () {
      return 360 / this.circularNodeNum
    },

    // 需重点展示的节点
    progressNumber: function () {
      return Math.round((this.progress / 100) * this.circularNodeNum)
    }
  }
}
</script>

<template>
  <div class="progress_circle_content">
    <div v-for="(item, index) in circularNodeNum" :key="'empty' + item">
      <div
        class="item"
        :style="{
          transform: `rotate(${index * rotationAngle}deg)`,
          filter: `grayscale(${index < progressNumber ? 0 : 1})`,
          opacity: index < progressNumber ? 1 : 0.4
        }"
      />
    </div>
    <div class="node_info_content">{{ progress }}%</div>
  </div>
</template>

<style scoped>
.progress_circle_content {
  margin: 50px;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;

  background-image: radial-gradient(circle, rgba(153, 204, 204, 0.6), transparent);

  .item {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    right: calc(50% - 10px);
    /* background-color: #6b6b6b20; */
    border-radius: 5px;
    transform-origin: 10px 100px;

    background-image: url('@/assets/item_bg_2.png');
    background-size: 100% 100%;
  }

  .node_info_content {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    font-weight: bolder;
    letter-spacing: 1px;
    color: #ffffff;
  }
}
.item {
  position: absolute;
  top: 0;
  width: 18px;
  height: 28px;
  right: calc(50% - 9px);
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 5px;
  transform-origin: 9px 100px;
}
</style>
