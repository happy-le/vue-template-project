<template>
  <div class="word_cell_main_content">
    <span><slot /></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: '永'
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: JXP;
  src: url(../JXP-.ttf) format('truetype');
}

.word_cell_main_content {
  --cell_color: rgba(255, 0, 0, 0.6);
  --cell-width: 145px;
  --cell-border-width: 4px;

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
    font-size: 100px;
    font-family: JXP;
    font-weight: bold;
    position: relative;
    // top: 4px;
    opacity: 0.8;
  }

  &:nth-child(9n) {
    border-right-width: var(--cell-border-width);
  }

  &:nth-child(-n + 9) {
    border-top-width: var(--cell-border-width);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;

    width: calc(var(--cell-width) * 2);
    height: 0px;
    border-style: dashed;
    border-color: var(--cell_color);
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
