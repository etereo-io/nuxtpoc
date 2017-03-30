<template>
  <div class="slider">
    <div class="slides" v-bind:style="`transform: translate3d(${currentOffset}px, 0, 0);`">
      <slot name="slides"></slot>
    </div>
    <dots v-if="dots"></dots>
    <arrows v-if="arrows"></arrows>
  </div>
</template>

<script>

const Dots = () => import('./Dots');
const Arrows = () => import('./Arrows');
const Slide = () => import('./Slide');

export default {
  name: 'carousel',
  components: {
    Dots,
    Arrows,
    Slide,
  },
  props: ['dots', 'arrows'],
  data() {
    return {
      currentPage: 0,
      carouselWidth: null,
      pages: this.$slots.slides.length,
    };
  },
  methods: {
    goToPage(idx) {
      this.currentPage = idx;
    },
    computeCarouselWidth() {
      this.carouselWidth = this.$el.clientWidth;
    },
    onWindowResize() {
      this.computeCarouselWidth();
    },
    goPrev() {
      if (this.canGoPrev) {
        this.goToPage(this.currentPage - 1);
      }
    },
    goNext() {
      if (this.canGoNext) {
        this.goToPage(this.currentPage + 1);
      }
    },
  },
  computed: {
    currentOffset() {
      const page = this.currentPage;
      const width = this.carouselWidth;
      const offset = page * width;

      return offset * -1;
    },
    canGoNext() {
      return this.currentPage < this.pages - 1;
    },
    canGoPrev() {
      return this.currentPage > 0;
    },
  },
  mounted() {
    window.addEventListener('resize', this.onWindowResize);
    this.computeCarouselWidth();
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider {
    overflow: hidden;
    position: relative;
  }
  .slides {
    transition: transform 250ms cubic-bezier(0.0, 0.0, 0.2, 1);
    height: 50vw;
    display: flex;
    flex-direction: row;
  }
</style>
