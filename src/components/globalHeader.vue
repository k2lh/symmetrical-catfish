<template>
  <div id="nav" class="globalnav">
    <div class="pure-g">
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8">
        <siteLogo/>
      </div>
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-3-8 boxlabel">
        <routerLink :to="'/'" class="exception">
          K L Hamilton
        </routerLink>
      </div>
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <routerLink :to="'/highlights'">
          highlights
        </routerLink>
      </div>
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <routerLink :to="'/archive'">
          archive
        </routerLink>
      </div>
      <!-- <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <routerLink to="/narratives">
          narratives
        </routerLink>
      </div> -->
      <div class="pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8 boxlabel">
        <routerLink :to="'/history'">
          history
        </routerLink>
      </div>
    </div>
  </div>
</template>

<script>
  import siteLogo from '../components/siteLogo.vue';

  export default {
    name: "globalHeader",
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
