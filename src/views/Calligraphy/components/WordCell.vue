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
  src: url(../JXP-.ttf)  format('truetype');
}

.word_cell_main_content {
  --cell_color: rgba(255, 0, 0, 0.6);

  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-style: solid;
  border-color: var(--cell_color);
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 2px;
  border-left-width: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 35px;
    font-family: JXP;
    font-weight: bold;
    position: relative;
    // top: 4px;
    opacity: 0.8;
  }

  &:nth-child(4n) {
    border-right-width: 2px;
  }

  &:nth-child(-n + 4) {
    border-top-width: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 75px;
    height: 0px;
    border-bottom: 1px var(--cell_color) dashed;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

    width: 75px;
    height: 0px;
    border-bottom: 1px var(--cell_color) dashed;
    transform: rotate(-45deg);
    transform-origin: 100% 0;
  }
}
</style>
