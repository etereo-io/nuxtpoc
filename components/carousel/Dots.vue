<template>
  <div class="dots">
    <div class="dot"
         :class="{ active: parentContainer.currentPage === index }"
         v-for="(page, index) in parentContainer.pages"
         @click="parentContainer.goToPage(index)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'dots',
  data() {
    return {
      parentContainer: this.$parent,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9;
    display: flex;
    max-width: 200px;
    justify-content: center;
  }
  .dot {
    border-radius: 50%;
    display: inline-block;
    border: 2px solid black;
    padding: 5px;
    margin: 15px 5px;
    transition: background-color 125ms ease-in-out;
  }
  .dot.active {
    background-color: black;
  }
</style>
