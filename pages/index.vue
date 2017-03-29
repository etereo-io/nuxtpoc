<template>
  <div class="home">
    <h1>Hello world!</h1>
    <p>Loaded from the {{name}}-side</p>
    <nuxt-link class="button" to="/todo">
      Todo
    </nuxt-link>
  </div>
</template>

<style scoped></style>

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
}
</script>
