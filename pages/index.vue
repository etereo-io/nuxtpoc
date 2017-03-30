<template>
  <div class="home container">
    <carousel></carousel>
  </div>
</template>

<script>
import carousel from '~/components/Carousel';

export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `Home (${this.name}-side)`
    }
  },
  components: {
    carousel,
  }
}
</script>
