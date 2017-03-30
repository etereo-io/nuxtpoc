<template>
  <div class="arrows">
    <div class="arrow arrow-prev" v-show="parentContainer.canGoPrev" @click="parentContainer.goPrev()">
      <svg>
        <use xlink:href="#arrowback"></use>
      </svg>
    </div>
    <div class="arrow arrow-next" v-show="parentContainer.canGoNext" @click="parentContainer.goNext()">
      <svg>
        <use xlink:href="#arrowforward"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'arrows',
  data() {
    return {
      parentContainer: this.$parent,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg {
    display: block;
    height: 25px;
    width: 25px;
  }
  .arrows {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 8;
  }
  .arrow {
    position: relative;
    top: 100%;
    transform: translateY(-100%);
    padding: 15px;
    color: white;
  }
  .arrow-prev {
    float: left;
  }
  .arrow-next {
    float: right;
  }
</style>
