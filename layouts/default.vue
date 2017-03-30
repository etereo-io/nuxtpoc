<template>
  <transition name="bounce" appear>
    <div>
      <nuxt/>
    </div>
  </transition>
</template>

<script>
  export default {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  }
</script>
