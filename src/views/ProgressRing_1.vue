<template>
<div class="progress_circle_content">
  <div v-for="(item, index) in 18" :key="item">
    <div
      class="item"
      :style="{
        transform: `rotate(${index * 20}deg)`,
        'background-color': index <= 12 ? '#8ebeff' : '#ffffff4d'
      }"
    />
  </div>
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
    top: 0;
    width: 18px;
    height: 28px;
    right: calc(50% - 9px);
    background-color: rgba(100, 100, 100, 0.3);
    border-radius: 5px;
    transform-origin: 9px 100px;
  }
}
</style>
