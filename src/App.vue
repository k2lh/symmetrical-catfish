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
    margin-top: 3rem;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding: 1rem;
    height: 100%;
    min-width: 7.5rem;
    &.center {
      flex: 6;
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
