<template>
  <div id="nav" class="globalnav">
    <div class="row">
      <div class="col">
        <siteLogo/>
      </div>
      <div class="col first adjust">
        <div class="boxlabel">
          <router-link class="exception" to="/">
            K L Hamilton
          </router-link>
        </div>
      </div>
      <div class="col adjust">
        <div class="boxlabel">
          <router-link to="/portfolio">
            portfolio
          </router-link>
        </div>
      </div>
      <div class="col adjust">
        <div class="boxlabel">
          <router-link to="/projects">
            projects
          </router-link>
        </div>
      </div>
      <div class="col adjust">
        <div class="boxlabel">
          <router-link to="/narratives">
            narratives
          </router-link>
        </div>
      </div>
      <div class="col adjust">
        <div class="boxlabel">
          <router-link to="/experience">
            experience
          </router-link>
        </div>
      </div>
      <div class="col adjust">
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
    top: 0;
    z-index: 999;
    background-color: #FFF;
    height: 3rem;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 3rem;
    padding: 1rem 0;
    border: 0;
    margin-top: 0;
  }

  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: right;
    padding: 0;
    border: 0;
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
    margin-top: -.5rem;
  }

</style>
