<template>
  <div class="home container">
    <h1>Hello world!</h1>
    <p>Loaded from the {{name}}-side</p>
    <nuxt-link class="button" to="/todo">
      Todo
    </nuxt-link>
  </div>
</template>

<script>
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
  layout: 'carousel',
}
</script>
