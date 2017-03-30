<template>
<div class="carousel">
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
            <h1>We are your friends</h1>
            <span>You are never going to be alone, darling.</span>
          </div>
        </slide>
      </carousel>
    </div>

  </transition>
</div>
</template>

<script>
const Carousel = () =>
  import ('~/components/carousel/Carousel');
const Slide = () =>
  import ('~/components/carousel/Slide');
import Navigation from '~/components/Navigation';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  }
}
</script>
