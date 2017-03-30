<template>
  <transition name="bounce" appear>

  <div>
    <carousel arrows="true" dots="true">
      <slide slot="slides" :style="{ 'background-color': '#f6f6f6' }">
        <div>
          <h1>We are awesome</h1>
          <span>Fucking, really, awesome</span>
        </div>
      </slide>
      <slide slot="slides" :style="{ 'background-color': '#ffc107' }">
        <svg>
          <use xlink:href="#search"></use>
        </svg>
        <div>
          <h1>Search just because!</h1>
          <span>Yes, this is a search icon i got in my side <b>just for fun</b></span>
        </div>
      </slide>
      <slide slot="slides" :style="{ 'background-color': '#03a9f4' }">
        <div>
          <svg>
            <use xlink:href="#computer"></use>
          </svg>
        </div>
        <div>
          <h1>Hosting</h1>
          <span>Optimizamos el despliegue de tu aplicación, porque la velocidad y la seguridad importan.</span>
        </div>
      </slide>
    </carousel>
    <nuxt/>
  </div>
</transition>
</template>

<script>
const Carousel = () => import('~/components/carousel/Carousel');
const Slide = () => import('~/components/carousel/Slide');

  export default {
    components: {
      Carousel,
      Slide,
    }
  }
</script>
