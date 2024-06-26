<template>
  <div id="nav" class="globalnav">
    <div class="row">
      <div class="col">
        <siteLogo/>
      </div>
      <div class="col first">
        <div class="boxlabel">
          <router-link class="exception" to="/">
            K L Hamilton
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="boxlabel">
          <router-link to="/portfolio">
            portfolio
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="boxlabel">
          <router-link to="/projects">
            projects
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="boxlabel">
          <router-link to="/narratives">
            narratives
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="boxlabel">
          <router-link to="/experience">
            experience
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="boxlabel">
          <router-link to="/testimonials">
            testimonials
          </router-link>
        </div>
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

  .col {
    padding: .75rem 1rem 0 1rem;
    height: 2rem;
    margin: 0;
    &.first {
      text-align: left;
      flex: 6;
    }
  }

  .sitelogo {
    padding: 0;
    text-align: center;
    margin-top: -.5rem;
  }

</style>
