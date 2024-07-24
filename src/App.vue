<template>
  <div id="app">
    <globalHeader />
    <router-view />
    <!-- <globalFooter /> -->
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router';
  import globalHeader from './components/globalHeader.vue';
  // import globalFooter from './components/globalFooter.vue';

  export default {
    name: 'app',
    components: {
      globalHeader
      // globalFooter
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
    // height: 100vh;
    padding-top: 4rem;
  }
</style>
