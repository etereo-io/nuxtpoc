<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'slide',
  };
</script>

<style scoped>
  .slide {
    display: flex;
    flex-shrink: 0;
    width: 100%;
    user-select: none;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .slide:first-child {
    margin-top: -34px;
  }
  @media (max-width: 600px) {
    .slide {
      flex-direction: column;
    }
  }
</style>
