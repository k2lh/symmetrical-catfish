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

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    &.full {
      height: 100%;
    }
    &.view {
      height: 100vh;
    }
    &.fits {
      height: auto;
    }
    &.short {
      margin-bottom: 0;
    }
    &.wrap {
      flex-wrap: wrap;
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height: 100%;
    // min-width: 7.5rem;
    &.two {
      flex: 2;
    }
    &.three {
      flex: 3;
    }
    &.four {
      flex: 4;
    }
    &.five {
      flex: 5;
    }
    &.six {
      flex: 6;
    }
    &.limit {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 100px 100px;
    }
  }

  /*<500px S - phones */
  @media only screen and (max-width: 499px) {
    .row {
      height: auto;
      flex-direction: column;
    }
  }

  /*500-1200 M - tablets */
  @media only screen and (min-width: 500px) and (max-width: 1199px) {

  }

</style>
