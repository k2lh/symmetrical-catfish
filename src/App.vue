<template>
  <siteHeader />
  <RouterView />
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router';
  import siteHeader from './components/siteHeader.vue';
  // import siteFooter from './components/siteFooter.vue';

  export default {
    name: 'App',
    components: {
      siteHeader
      // siteFooter
    },
    data() {
      return {
        items: []
      };
    }
  };
</script>

<style lang="scss">
  .page {
    height: 100vh;
    margin-top: 4rem;
  }

  // .row {
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   width: 100%;
  //   &.full {
  //     height: 100%;
  //   }
  //   &.view {
  //     height: 100vh;
  //   }
  //   &.fits {
  //     height: auto;
  //   }
  //   &.short {
  //     margin-bottom: 0;
  //   }
  //   &.wrap {
  //     flex-wrap: wrap;
  //   }
  // }

  .col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    height: 100%;
    &.limit {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 100px 100px;
      width: 50%;
      height: 6rem;
      float: left;
    }
  }
</style>
