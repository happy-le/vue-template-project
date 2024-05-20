<template>
  <div class="word_cell_main_content">
    <slot />
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

  text-align: center;
  line-height: 50px;
  font-size: 30px;

  &:nth-child(3n) {
    border-right-width: 2px;
  }
  
  &:nth-child(-n + 3) {
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
