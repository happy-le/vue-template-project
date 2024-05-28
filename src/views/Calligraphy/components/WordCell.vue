<template>
  <div class="word_cell_main_content">
    <span><slot /></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: JXP; // 字体
  src: url(../assets/JXP-.ttf) format('truetype');
}

.word_cell_main_content {
  --cell_color: rgba(255, 0, 0, 0.8); // 格子边框颜色
  --cell_diagonal_color: rgba(255, 0, 0, 0.3); // 格子对角线颜色
  --cell-width: 145px; // 格子宽度
  --cell-border-width: 4px; // 格子边框宽度

  position: relative;
  width: var(--cell-width);
  height: var(--cell-width);
  overflow: hidden;
  border-style: solid;
  border-color: var(--cell_color);
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: var(--cell-border-width);
  border-left-width: var(--cell-border-width);

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1; // 文字的层级要比对角线高
    color: rgba(0, 0, 0, 0.4); // 文字颜色
    font-size: 100px;
    font-family: JXP;
    // font-weight: bolder;
    position: relative;
    // top: 4px; // 文字偏移
    opacity: 0.8;
  }

  &:nth-child(8n) {
    border-right-width: var(--cell-border-width);
  }

  &:nth-child(-n + 8) {
    border-top-width: var(--cell-border-width);
  }

  &::before,
  &::after {
    z-index: 0;
    content: '';
    position: absolute;
    top: 0;

    width: calc(var(--cell-width) * 2);
    height: 0px;
    border-style: dashed;
    border-color: var(--cell_diagonal_color);
    border-width: 0 0 var(--cell-border-width) 0;
  }

  &::before {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }

  &::after {
    right: 0;
    transform: rotate(-45deg);
    transform-origin: 100% 0;
  }
}
</style>
