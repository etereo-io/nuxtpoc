<template>
    <footer class="navigation">
      <div class="ink-bar">
        <div class="ink" :style="{ transform: `translate3d(${computedOffset}px,0,0)`, width: `${computedWidth}px` }"></div>
      </div>
      <div class="layout-row layout-align-space-between-center">
      <nav>
        <h1 class="hidden">Navigation menu</h1>
        <ul class="layout-row">
          <slot></slot>
        </ul>
      </nav>
      <div>
        <ul>
          <li @click="setLang('es')">{{ $t('spanish') }}</li>
          <li @click="setLang('en')">{{ $t('english') }}</li>
        </ul>
      </div>
    </div>
    </footer>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'navigation',
  data() {
    return {
      offset: 0,
      itemWidth: 0,
    };
  },
  methods: {
    getActiveElement(path) {
      return path ? this.$el.querySelector(`a[href='${path}']`) : this.$el.querySelector('.nuxt-link-active');
    },
    setInkBarPosition(el = this.getActiveElement()) {
      if (!el) {
        return;
      }
      this.offset = el.offsetLeft;
      this.itemWidth = el.clientWidth - 20;
    },
    setLang(lang) {
      this.$store.dispatch('lang/setLang', lang);
    },
  },
  watch: {
    $route: function watchRoute(next) {
      const activeEl = this.getActiveElement(next.matched[0].path || '/');
      this.setInkBarPosition(activeEl);
    },
  },
  computed: {
    computedOffset() {
      return this.offset;
    },
    computedWidth() {
      return this.itemWidth;
    }
  },
  mounted() {
    this.setInkBarPosition(this.getActiveElement());
  },
};
</script>
<style lang="stylus">
  footer
    overflow hidden
    background-color: black
  .navigation
    position absolute
    bottom 0
    width 100%
  li
    transition background-color 250ms ease-in
    &.router-link-active
      a
        color #fff
    a
      padding 33px 20px
      display inline-block
      font-family Raleway
      text-decoration none
      font-size 10px
      color #00d1b7
      transition color 250ms ease-in
      &:hover
        color #fff
    &:hover
      background-color rgba(75, 75, 75, 0.5)

  .ink-bar
    border-top 1px solid #abaaab
    position relative
    left 10px
    width calc(100vw - 20px)

    .ink
      transition transform 0.25s cubic-bezier(0.35, 0, 0.25, 1), width 0.125s cubic-bezier(0.35, 0, 0.25, 1)
      height 2px
      background-color #00d1b7
      display inline-block
      position absolute
      left 0
      top 0

</style>
