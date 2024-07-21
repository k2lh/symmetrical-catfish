<template>
  <div id="nav" class="globalnav">
    <div class="pure-g">
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8">
        <siteLogo/>
      </div>
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-3-8 boxlabel">
        <router-link class="exception" to="/">
          K L Hamilton
        </router-link>
      </div>
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <router-link to="/highlights">
          highlights
        </router-link>
      </div>
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <router-link to="/archive">
          archive
        </router-link>
      </div>
      <!-- <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <router-link to="/narratives">
          narratives
        </router-link>
      </div> -->
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <router-link to="/history">
          history
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import siteLogo from '../components/siteLogo.vue';

  export default {
    name: "siteHeader",
    components: {
      siteLogo
    }
  };
</script>

<style scoped lang="scss">
  .globalnav {
    width: 100%;
    position: fixed;
    top: 0rem;
    z-index: 100;
    background: transparent;
  }

  .boxlabel {
    padding: 1rem 0 0 0;
  }

  .sitelogo {
    padding: 3px 0 0 2rem;
  }

</style>
