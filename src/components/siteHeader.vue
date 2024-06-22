<template>
  <div id="nav" class="globalnav">
    <div class="row">
      <div class="col">
        <siteLogo/>
      </div>
      <div class="col first adjust">
        <router-link class="boxlabel" to="/">
          K L Hamilton
        </router-link>
      </div>
      <div class="col adjust">
        <router-link class="boxlabel" to="/portfolio">
          portfolio
        </router-link>
      </div>
      <div class="col adjust">
        <router-link class="boxlabel" to="/projects">
          projects
        </router-link>
      </div>
      <div class="col adjust">
        <router-link class="boxlabel" to="/experience">
          experience
        </router-link>
      </div>
      <div class="col adjust">
        <router-link class="boxlabel" to="/testimonials">
          testimonials
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
    top: 0;
    z-index: 999;
    background-color: #FFF;
    border: 1px solid red;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: .5rem 0;
  }

  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: right;
    padding: 0;
    &.first {
      text-align: left;
      flex: 6;
    }
    &.adjust {
      margin: auto 1rem;
    }
  }

  .sitelogo {
    padding: 0;
    text-align: center;
  }

</style>
